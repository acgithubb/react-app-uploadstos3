import React, { useState } from 'react';
import s3 from './aws-config';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const params = {
        Bucket: 'react-accesslogs',
        Key: selectedFile.name,
        Body: selectedFile
      };

      s3.upload(params, (error, data) => {
        if (error) {
          console.error(error);
        } else {
          console.log('File uploaded successfully!', data.Location);
        }
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
