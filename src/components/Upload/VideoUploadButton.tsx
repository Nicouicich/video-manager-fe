// components/UploadButton.tsx
"use client";
import { uploadVideo } from "@api/videos/videos";
import React, { useRef, useState } from "react";

const UploadButton: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async () => {
    if (fileInputRef.current?.files?.length) {
      setLoading(true);
      const filesArray = Array.from(fileInputRef.current.files);
      const jwt = localStorage.getItem("jwt");
      await uploadVideo(filesArray, jwt);
      setLoading(false);
    }
  };
  return (
    <div>
      <input
        type="file"
        accept="video/*"
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-80 hover:opacity-100 transition-opacity duration-300"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload Video"}
      </button>
    </div>
  );
};

export default UploadButton;
