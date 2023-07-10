'use client'

import React, { useState } from 'react';
import Viewer from './ui/Viewer';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('http://localhost:8080/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error uploading file');
          }
        })
        .then((data) => {
          console.log(data); // Handle response from the Flask API
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    } else {
      console.log('Invalid file format');
    }
  };

  return (
    <div>
      {/* <input type="file" accept=".xlsx" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button> */}
      {/* <Viewer /> */}
    </div>
    
  );
};

export default Upload;
