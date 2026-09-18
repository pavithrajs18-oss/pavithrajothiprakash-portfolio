import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ProfilePhotoContextType {
  photoUrl: string | null;
  hasCustomPhoto: boolean;
  uploadPhoto: (file: File) => Promise<boolean>;
  removePhoto: () => void;
  openUploadModal: () => void;
  closeUploadModal: () => void;
  isUploadModalOpen: boolean;
}

const STORAGE_KEY = 'pavithra_portfolio_profile_photo_v2';

const ProfilePhotoContext = createContext<ProfilePhotoContextType | undefined>(undefined);

export const ProfilePhotoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    } catch {
      // localStorage might be unavailable in restricted iframes
    }
    return null;
  });

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  useEffect(() => {
    // If not in localStorage, check if user placed file in public folder
    if (!photoUrl) {
      const candidates = ['/PASSPORT SIZE COMPRESSED.jpg', '/profile-photo.jpg', '/pavithra-photo.jpg'];
      let isMounted = true;

      const checkCandidates = async () => {
        for (const path of candidates) {
          try {
            const res = await fetch(path, { method: 'HEAD' });
            if (res.ok && isMounted) {
              const contentType = res.headers.get('content-type');
              if (contentType && (contentType.includes('image') || contentType.includes('octet-stream'))) {
                setPhotoUrl(path);
                return;
              }
            }
          } catch {
            // continue
          }
        }
      };

      checkCandidates();
      return () => {
        isMounted = false;
      };
    }
  }, [photoUrl]);

  const uploadPhoto = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      if (!file.type.startsWith('image/')) {
        resolve(false);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          try {
            localStorage.setItem(STORAGE_KEY, result);
          } catch (err) {
            console.warn('Could not store photo in localStorage:', err);
          }
          resolve(true);
        } else {
          resolve(false);
        }
      };
      reader.onerror = () => resolve(false);
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = () => {
    setPhotoUrl(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn('Could not clear photo in localStorage:', err);
    }
  };

  return (
    <ProfilePhotoContext.Provider
      value={{
        photoUrl,
        hasCustomPhoto: !!photoUrl,
        uploadPhoto,
        removePhoto,
        openUploadModal: () => setIsUploadModalOpen(true),
        closeUploadModal: () => setIsUploadModalOpen(false),
        isUploadModalOpen,
      }}
    >
      {children}
    </ProfilePhotoContext.Provider>
  );
};

const defaultContextValue: ProfilePhotoContextType = {
  photoUrl: '/PASSPORT SIZE COMPRESSED.jpg',
  hasCustomPhoto: true,
  uploadPhoto: async () => false,
  removePhoto: () => {},
  openUploadModal: () => {},
  closeUploadModal: () => {},
  isUploadModalOpen: false,
};

export const useProfilePhoto = (): ProfilePhotoContextType => {
  const context = useContext(ProfilePhotoContext);
  if (!context) {
    return defaultContextValue;
  }
  return context;
};

