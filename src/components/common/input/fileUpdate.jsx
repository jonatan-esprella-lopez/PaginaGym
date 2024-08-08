import React, { useState, useRef } from 'react';
import './FileUploader.css'; // Asegúrate de tener este archivo para los estilos

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleUpload = () => {
    if (file) {
      setUploading(true);
      simulateUpload(file);
    }
  };

  const simulateUpload = (file) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploading(false);
        setUploadSuccessful(true);
      }
    }, 500);
  };

  const handleCopyLink = () => {
    // Simula copiar un enlace al portapapeles
    navigator.clipboard.writeText("https://example.com/file/" + file.name);
    alert("Link copied to clipboard!");
  };

  const handleDone = () => {
    // Resetea todo para subir otro archivo
    setFile(null);
    setUploadProgress(0);
    setUploadSuccessful(false);
  };

  return (
    <div className="upload-modal">
      <div className="upload-content">
        {!uploading && !uploadSuccessful && (
          <>
            {!file ? (
              <>
                <h2>Upload a File</h2>
                <p>Select a file to upload from your computer</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <button onClick={handleChooseFile}>Choose File</button>
              </>
            ) : (
              <>
                <h2>File Selected</h2>
                <p>{file.name}</p>
                <button onClick={handleUpload}>Upload</button>
                <button onClick={() => setFile(null)}>Cancel</button>
              </>
            )}
          </>
        )}
        {uploading && (
          <div className="uploading">
            <h2>Uploading...</h2>
            <p>Just give us a moment to process your file.</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <span>{uploadProgress}%</span>
          </div>
        )}
        {uploadSuccessful && (
          <div className="upload-successful">
            <h2>Upload Successful!</h2>
            <p>Your file has been uploaded. You can copy the link to your clipboard.</p>
            <button onClick={handleCopyLink}>Copy Link</button>
            <button onClick={handleDone}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
