import * as XLSX from 'xlsx';
import { WorkingPaperSheet, WorkingPaperRow } from '../types';

export interface ParsedUploadedWorkbook {
  fileName: string;
  sheetNames: string[];
  activeSheet: string;
  sheets: {
    [sheetName: string]: {
      headers: string[];
      rows: WorkingPaperRow[];
      rowCount: number;
    };
  };
}

/**
 * Parses an uploaded Excel file (.xlsx, .xls, .csv) into structured sheet data.
 */
export const parseUploadedExcel = async (file: File): Promise<ParsedUploadedWorkbook> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetNames = workbook.SheetNames;
        if (!sheetNames || sheetNames.length === 0) {
          throw new Error('The uploaded Excel file contains no worksheets.');
        }

        const sheetsData: ParsedUploadedWorkbook['sheets'] = {};

        sheetNames.forEach((name) => {
          const worksheet = workbook.Sheets[name];
          // Convert sheet to JSON with header rows
          const jsonData = XLSX.utils.sheet_to_json<WorkingPaperRow>(worksheet, {
            defval: '',
            blankrows: false
          });

          if (jsonData.length > 0) {
            const headers = Object.keys(jsonData[0]);
            sheetsData[name] = {
              headers,
              rows: jsonData,
              rowCount: jsonData.length
            };
          } else {
            sheetsData[name] = {
              headers: ['A', 'B', 'C'],
              rows: [],
              rowCount: 0
            };
          }
        });

        resolve({
          fileName: file.name,
          sheetNames,
          activeSheet: sheetNames[0],
          sheets: sheetsData
        });
      } catch (err) {
        reject(err instanceof Error ? err : new Error('Failed to parse Excel file.'));
      }
    };

    reader.onerror = () => {
      reject(new Error('File reading error.'));
    };

    reader.readAsArrayBuffer(file);
  });
};

/**
 * Exports a working paper sheet directly to a Microsoft Excel (.xlsx) file.
 */
export const exportWorkingPaperToExcel = (sheet: WorkingPaperSheet) => {
  const wb = XLSX.utils.book_new();

  // Create metadata header block
  const metaInfo = [
    ['AUDIT WORKING PAPER — ' + sheet.title.toUpperCase()],
    ['Reference:', sheet.wpRef, 'Category:', sheet.category],
    ['Audit Standard:', sheet.standardRef, 'Audit Period:', sheet.auditPeriod],
    ['Prepared By:', sheet.preparedBy, 'Reviewed By:', sheet.reviewedBy],
    ['Materiality:', sheet.materialityThreshold || 'N/A'],
    ['Objective:', sheet.objective],
    [] // blank row before table
  ];

  // Map rows
  const tableData = sheet.rows.map((row) => {
    const obj: { [key: string]: any } = {};
    sheet.headers.forEach((h) => {
      obj[h] = row[h] !== undefined ? row[h] : '';
    });
    return obj;
  });

  // Append totals if available
  if (sheet.totals) {
    const totalObj: { [key: string]: any } = {};
    sheet.headers.forEach((h) => {
      totalObj[h] = sheet.totals?.[h] ?? '';
    });
    tableData.push(totalObj);
  }

  // Convert to worksheet
  const ws = XLSX.utils.aoa_to_sheet(metaInfo);
  XLSX.utils.sheet_add_json(ws, tableData, { origin: 'A8' });

  // Append findings at the bottom
  if (sheet.findings && sheet.findings.length > 0) {
    const findingsRows = [
      [],
      ['AUDIT FINDINGS & CONCLUSIONS:'],
      ...sheet.findings.map((f, i) => [`${i + 1}. ${f}`])
    ];
    XLSX.utils.sheet_add_aoa(ws, findingsRows, { origin: -1 });
  }

  // Set column widths
  const colWidths = sheet.headers.map((h) => ({
    wch: Math.max(h.length + 4, 16)
  }));
  ws['!cols'] = colWidths;

  // Add worksheet to workbook and trigger download
  const safeSheetName = sheet.shortTitle.slice(0, 30).replace(/[:\/\\?*\[\]]/g, '-');
  XLSX.utils.book_append_sheet(wb, ws, safeSheetName);

  const fileName = `${sheet.wpRef.replace(/[^a-zA-Z0-9_-]/g, '_')}_${sheet.shortTitle.replace(/[^a-zA-Z0-9_-]/g, '_')}.xlsx`;
  XLSX.writeFile(wb, fileName);
};

/**
 * Generates an Excel Master Audit Workbook containing all sample working papers.
 */
export const exportAllWorkingPapersToExcel = (sheets: WorkingPaperSheet[]) => {
  const wb = XLSX.utils.book_new();

  sheets.forEach((sheet) => {
    const metaInfo = [
      ['AUDIT WORKING PAPER: ' + sheet.title.toUpperCase()],
      ['Reference:', sheet.wpRef, 'Standard:', sheet.standardRef],
      ['Prepared By:', sheet.preparedBy, 'Period:', sheet.auditPeriod],
      ['Objective:', sheet.objective],
      []
    ];

    const tableData = sheet.rows.map((row) => {
      const obj: { [key: string]: any } = {};
      sheet.headers.forEach((h) => {
        obj[h] = row[h] !== undefined ? row[h] : '';
      });
      return obj;
    });

    if (sheet.totals) {
      const totalObj: { [key: string]: any } = {};
      sheet.headers.forEach((h) => {
        totalObj[h] = sheet.totals?.[h] ?? '';
      });
      tableData.push(totalObj);
    }

    const ws = XLSX.utils.aoa_to_sheet(metaInfo);
    XLSX.utils.sheet_add_json(ws, tableData, { origin: 'A6' });

    const safeSheetName = sheet.shortTitle.slice(0, 30).replace(/[:\/\\?*\[\]]/g, '-');
    XLSX.utils.book_append_sheet(wb, ws, safeSheetName);
  });

  XLSX.writeFile(wb, 'Pavithra_JS_Audit_Working_Papers_Master_FY24.xlsx');
};
