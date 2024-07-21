import React, { useState } from 'react';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('File uploaded successfully!');
      } else {
        setMessage('File upload failed.');
      }
    } catch (error) {
      setMessage('An error occurred while uploading the file.');
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <div className="card-body">
    <h2 className="card-title">Upload File</h2>
    <input type="file" onChange={handleFileChange} className="border border-gray " />

    <div className="card-actions justify-end">
      <button onClick={handleUpload} className="btn btn-primary">Upload</button>
      <p>{message}</p>
    </div>
  </div>
</div>
  );
};

export default FileUpload;

