import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

function generateResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // ~595.28 pt
  const pageHeight = doc.internal.pageSize.getHeight(); // ~841.89 pt
  const margin = 40;
  const contentWidth = pageWidth - margin * 2; // ~515 pt

  // ===================== PAGE 1 =====================
  let y = 45;

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(20, 20, 20);
  doc.text('PAVITHRA J S', pageWidth / 2, y, { align: 'center' });

  // Subtitle
  y += 18;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 50);
  doc.text(
    'ACCOUNTS & AUDIT EXECUTIVE | ACCOUNTING, TAXATION & RECONCILIATION | CA INTERMEDIATE',
    pageWidth / 2,
    y,
    { align: 'center' }
  );

  // Contact line
  y += 14;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(70, 70, 70);
  doc.text(
    'Singarapettai, Krishnagiri, Tamil Nadu | 9677808801 | pavithrajs18@gmail.com | linkedin.com/in/pavithra-jothiprakash-07ba922b9',
    pageWidth / 2,
    y,
    { align: 'center' }
  );

  // Helper for Section Heading
  function drawSectionHeader(title: string, topY: number): number {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(25, 30, 40);
    doc.text(title, margin, topY);
    const lineY = topY + 4;
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.75);
    doc.line(margin, lineY, margin + contentWidth, lineY);
    return lineY + 12;
  }

  // --- PROFESSIONAL SUMMARY ---
  y += 18;
  y = drawSectionHeader('PROFESSIONAL SUMMARY', y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  const summaryText =
    'B.Com graduate and CA Intermediate candidate with practical experience in audit support, accounting, reconciliation, asset verification, and financial documentation. Hands-on exposure to bookkeeping, journal entries, ledger posting, trial balance, bank reconciliation, vendor/customer reconciliation, financial statements, GST reconciliation, and tax computation. Experienced in preparing audit working papers, identifying discrepancies, verifying financial records, and coordinating documentation for client assignments. Proficient in MS Excel and Tally Prime, with working exposure to Zoho Books and Google Sheets with strong attention to accuracy, documentation, and deadlines.';
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y, { lineHeightFactor: 1.35 });
  y += splitSummary.length * 11.5 + 8;

  // --- CORE SKILLS ---
  y = drawSectionHeader('CORE SKILLS', y);

  const coreSkills = [
    {
      title: 'Accounting & Bookkeeping: ',
      text: 'Financial Accounting, Bookkeeping, Journal Entries, General Ledger, Trial Balance, Financial Statements, Bank Reconciliation, Vendor Reconciliation, Customer Reconciliation, Accounts Payables and Receivables.'
    },
    {
      title: 'Audit & Verification: ',
      text: 'Internal Audit, Audit Procedures, Audit Working Papers, Audit Documentation, Risk-Based Audit, Physical Asset Verification, Fixed Asset Verification, Asset Reconciliation, Sampling, Vouching, Verification, Compliance Review, Discrepancy Identification & Reporting'
    },
    {
      title: 'Tax & Compliance: ',
      text: 'GST Compliance, GST Reconciliation, GSTR-1, GSTR-2B Reconciliation, GSTR-3B Working Papers, Input Tax Credit, Section 17(5) ITC Rules, TDS Basics, Income Tax Basics'
    },
    {
      title: 'Excel & Digital Tools: ',
      text: 'MS Excel, VLOOKUP, Pivot Tables, SUM, IF, Sorting & Filtering, Google Sheets, Google Workspace, Structured Working Papers, Reconciliation Trackers'
    },
    {
      title: 'Accounting Software: ',
      text: 'Tally Prime, Zoho Books; Xero, QuickBooks (Extending Knowledge)'
    },
    {
      title: 'Professional Skills: ',
      text: 'Client Coordination, Analytical Thinking, Attention to Detail, Documentation, Deadline Management, Independent Working, Team Collaboration, Confidentiality.'
    }
  ];

  doc.setFontSize(8.5);
  coreSkills.forEach((item) => {
    const bullet = '\u2022 ';
    const bulletWidth = doc.getTextWidth(bullet);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    doc.text(bullet, margin + 4, y);

    // Render combined text wrapped
    const fullLine = item.title + item.text;
    const splitLine = doc.splitTextToSize(fullLine, contentWidth - bulletWidth - 8);

    // Draw first line with bold prefix
    doc.setFont('helvetica', 'bold');
    doc.text(item.title, margin + 4 + bulletWidth, y);
    const titleWidth = doc.getTextWidth(item.title);

    doc.setFont('helvetica', 'normal');
    // First line remainder:
    // Split full line to get exact wraps
    const wrapped = doc.splitTextToSize(item.title + item.text, contentWidth - bulletWidth - 8);
    // Draw wrapped text cleanly
    wrapped.forEach((lineText: string, idx: number) => {
      if (idx === 0) {
        // Draw the rest of first line
        const restOfFirstLine = lineText.slice(item.title.length);
        doc.text(restOfFirstLine, margin + 4 + bulletWidth + titleWidth, y);
      } else {
        doc.text(lineText, margin + 4 + bulletWidth, y + idx * 11);
      }
    });

    y += wrapped.length * 11 + 3;
  });

  // --- EXPERIENCE ---
  y += 5;
  y = drawSectionHeader('EXPERIENCE', y);

  // Job 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(20, 20, 20);
  doc.text('Freelance Audit & Reconciliation Assistant', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text(' | Self-Employed', margin + doc.getTextWidth('Freelance Audit & Reconciliation Assistant'), y);

  const date1 = 'Dec 2025 \u2013 July 2026';
  doc.text(date1, margin + contentWidth - doc.getTextWidth(date1), y);
  y += 12;

  const job1Bullets = [
    'Performed physical asset verification and reconciliation against Fixed Asset Registers (FAR) across 4 client engagements spanning retail, banking, manufacturing, and financial services sectors.',
    'Executed multi-branch asset tagging and verification across 3 locations for a banking-sector client, coordinating fieldwork to meet compliance deadlines.',
    'Identified, investigated, and documented financial discrepancies, asset movements, and verification exceptions, maintaining evidence-backed audit working papers.',
    'Prepared audit working papers, verification reports, supporting documentation, and formal findings in line with client-specific requirements.',
    'Coordinated directly with audit teams to ensure timely completion of audit documentation and compliance deliverables.',
    'Conducted a Mystery Audit for a banking-sector client, evaluating operational and procedural compliance and documenting observations in a structured report.',
    'Maintained accuracy and completeness of supporting evidence throughout audit and reconciliation assignments.'
  ];

  doc.setFontSize(8.2);
  job1Bullets.forEach((bulletText) => {
    const bullet = '\u2022 ';
    const bulletWidth = doc.getTextWidth(bullet);
    doc.text(bullet, margin + 8, y);
    const splitBullet = doc.splitTextToSize(bulletText, contentWidth - bulletWidth - 12);
    doc.text(splitBullet, margin + 8 + bulletWidth, y, { lineHeightFactor: 1.25 });
    y += splitBullet.length * 10.5 + 2;
  });

  // Job 2
  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(20, 20, 20);
  doc.text('Document Typist & Administrative Support', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text(' | GP Educraft Solutions', margin + doc.getTextWidth('Document Typist & Administrative Support'), y);

  const date2 = 'Mar 2025 \u2013 Present';
  doc.text(date2, margin + contentWidth - doc.getTextWidth(date2), y);
  y += 10;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text('(Remote, Only on Demand Basis)', margin + 8, y);
  y += 11;

  const job2Bullets = [
    'Prepared, formatted, proofread, and maintained 20+ professional and academic documents with high accuracy under recurring deadlines.',
    'Maintained organized digital records, version control, confidentiality, and timely completion across multiple assignments.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(40, 40, 40);
  job2Bullets.forEach((bulletText) => {
    const bullet = '\u2022 ';
    const bulletWidth = doc.getTextWidth(bullet);
    doc.text(bullet, margin + 8, y);
    const splitBullet = doc.splitTextToSize(bulletText, contentWidth - bulletWidth - 12);
    doc.text(splitBullet, margin + 8 + bulletWidth, y, { lineHeightFactor: 1.25 });
    y += splitBullet.length * 10.5 + 2;
  });

  // --- RELEVANT PROJECTS (PART 1 on Page 1) ---
  y += 4;
  y = drawSectionHeader('RELEVANT ACCOUNTING, TAX & AUDIT PROJECTS (Work in Progress)', y);

  const project1Text =
    'Internal Audit & Risk-Based Controls Review: Performed audit planning, sampling, vouching and verification, prepared audit working papers, identified control exceptions, and documented risk-rated findings with recommendations.';
  const bullet = '\u2022 ';
  const bulletWidth = doc.getTextWidth(bullet);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(40, 40, 40);
  doc.text(bullet, margin + 8, y);

  doc.setFont('helvetica', 'bold');
  const p1Prefix = 'Internal Audit & Risk-Based Controls Review: ';
  doc.text(p1Prefix, margin + 8 + bulletWidth, y);
  const p1PrefixWidth = doc.getTextWidth(p1Prefix);

  doc.setFont('helvetica', 'normal');
  const p1Body =
    'Performed audit planning, sampling, vouching and verification, prepared audit working papers, identified control exceptions, and documented risk-rated findings with recommendations.';
  const p1Lines = doc.splitTextToSize(p1Prefix + p1Body, contentWidth - bulletWidth - 12);
  p1Lines.forEach((lineText: string, idx: number) => {
    if (idx === 0) {
      doc.text(lineText.slice(p1Prefix.length), margin + 8 + bulletWidth + p1PrefixWidth, y);
    } else {
      doc.text(lineText, margin + 8 + bulletWidth, y + idx * 10.5);
    }
  });

  // ===================== PAGE 2 =====================
  doc.addPage();
  y = 45;

  // Continued Projects on Page 2
  const p2Projects = [
    {
      prefix: 'AP/AR Management & Financial Analysis Dashboard: ',
      body: 'Built Excel-based Accounts Payable and Receivable trackers covering invoice ageing, vendor/customer reconciliation, payment follow-up, month-end adjustments, budget-vs-actual analysis, and dashboard reporting.'
    },
    {
      prefix: 'End-to-End Bookkeeping & Financial Statements: ',
      body: 'Completed the accounting cycle from journal entries and ledger posting to Trial Balance, Bank Reconciliation, vendor/customer reconciliation, fixed assets, and financial statements using Tally Prime and Excel.'
    },
    {
      prefix: 'GST Compliance & Return Filing Simulation: ',
      body: 'Prepared sales and purchase registers, simulated GSTR-1 and GSTR-3B, reconciled GSTR-2B with purchase records, computed eligible ITC, and applied Section 17(5) provisions.'
    },
    {
      prefix: 'Income Tax Computation & Return Filing: ',
      body: 'Computed taxable income and tax liability across Salary, House Property, PGBP, and Capital Gains, including deductions, old vs. new regime comparison, TDS/TCS reconciliation, and ITR form mapping.'
    }
  ];

  doc.setFontSize(8.2);
  p2Projects.forEach((proj) => {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    doc.text(bullet, margin + 8, y);

    doc.setFont('helvetica', 'bold');
    doc.text(proj.prefix, margin + 8 + bulletWidth, y);
    const prefixWidth = doc.getTextWidth(proj.prefix);

    doc.setFont('helvetica', 'normal');
    const fullLine = proj.prefix + proj.body;
    const lines = doc.splitTextToSize(fullLine, contentWidth - bulletWidth - 12);
    lines.forEach((lineText: string, idx: number) => {
      if (idx === 0) {
        doc.text(lineText.slice(proj.prefix.length), margin + 8 + bulletWidth + prefixWidth, y);
      } else {
        doc.text(lineText, margin + 8 + bulletWidth, y + idx * 10.5);
      }
    });
    y += lines.length * 10.5 + 4;
  });

  // --- EDUCATION ---
  y += 10;
  y = drawSectionHeader('EDUCATION', y);

  const education = [
    {
      degree: 'Master of Commerce (M. Com) - Ongoing',
      institution: 'Institute of Distance Education, University of Madras',
      period: 'Jun 2026 \u2013 Present'
    },
    {
      degree: 'CA Intermediate - Ongoing',
      institution: 'Institute of Chartered Accountants of India',
      period: 'Aug 2023 \u2013 Present'
    },
    {
      degree: 'Bachelor of Commerce (B. Com) CGPA: 7.05/10',
      institution: 'Institute of Distance Education, University of Madras',
      period: 'Jun 2022 \u2013 Jun 2025'
    },
    {
      degree: 'CA Foundation - Passed',
      institution: 'Institute of Chartered Accountants of India',
      period: 'Jun 2023'
    }
  ];

  education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(20, 20, 20);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(70, 70, 70);
    doc.text(edu.period, margin + contentWidth - doc.getTextWidth(edu.period), y);
    y += 11;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(50, 50, 50);
    doc.text(edu.institution, margin, y);
    y += 12;
  });

  // --- CERTIFICATIONS & TRAININGS ---
  y += 6;
  y = drawSectionHeader('CERTIFICATIONS & TRAININGS', y);

  const certifications = [
    'ICAI Orientation Programme',
    'ICITSS (Integrated Course on Information Technology and Soft Skills)'
  ];

  doc.setFontSize(8.2);
  doc.setTextColor(40, 40, 40);
  certifications.forEach((cert) => {
    doc.text(bullet, margin + 8, y);
    doc.text(cert, margin + 8 + bulletWidth, y);
    y += 12;
  });

  // --- ACTIVITIES & ACHIEVEMENTS ---
  y += 6;
  y = drawSectionHeader('ACTIVITIES & ACHIEVEMENTS', y);

  const achievements = [
    'Volunteer & Participant, ICAI Student (SICASA) Conferences',
    'World Record Participation event - Aarohana 2025 CA Student\u2019s National Conference',
    'Master of Ceremony (MOC) \u2013 Madugam 2026, CA Student\u2019s Mega Conference'
  ];

  achievements.forEach((ach) => {
    doc.text(bullet, margin + 8, y);
    doc.text(ach, margin + 8 + bulletWidth, y);
    y += 12;
  });

  // --- LANGUAGES ---
  y += 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(25, 30, 40);
  const langPrefix = 'Languages: ';
  doc.text(langPrefix, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(50, 50, 50);
  doc.text(
    'English (Professional Working), Tamil (Native), Telugu (Native), Hindi (Elementary).',
    margin + doc.getTextWidth(langPrefix),
    y
  );

  // Save to file
  const outDir = path.join(process.cwd(), 'public', 'resume');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const filePath = path.join(outDir, 'Pavithra-J-S-Resume.pdf');
  fs.writeFileSync(filePath, Buffer.from(doc.output('arraybuffer')));
  console.log('Successfully generated official resume PDF at:', filePath);
}

generateResumePDF();
