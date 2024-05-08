// components/UploadButton.tsx
'use client';
import { uploadVideo } from '@/api/videos/videos';
import React, { useEffect, useRef, useState } from 'react';

const UploadButton: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = () => {
    if (fileInputRef.current?.files?.length) {
      const filesArray = Array.from(fileInputRef.current.files);
      const jwt = localStorage.getItem('jwt'); // get the token from local storage
      uploadVideo(filesArray, jwt);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        multiple
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Subir Video
      </button>
    </div>
  );
};

export default UploadButton;