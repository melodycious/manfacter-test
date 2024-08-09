import React, { useState } from 'react';

const FileUploader = ({ onFileSelect }) => {
  const [fileName, setFileName] = useState('Manifold_v01.stl');
  const [uploadedFiles, setUploadedFiles] = useState([
    'Threads_v01.stl',
    'Manifold_v03.stl',
    'Part_304.stl',
  ]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file.name);
      setUploadedFiles([file.name, ...uploadedFiles.slice(1)]);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <span className="text-lg font-semibold">{fileName}</span>
        <span className="text-blue-600">Analyzing...</span>
      </div>
      
      <div className="mb-4">
        <div className="border p-2 rounded-md flex items-center">
          <span className="text-gray-700 flex-1">{uploadedFiles[0]}</span>
        </div>
        <div className="pl-4">
          {uploadedFiles.slice(1).map((file, index) => (
            <div key={index} className="border p-2 rounded-md flex items-center mt-2">
              <span className="text-gray-700 flex-1">{file}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <input
          type="file"
          id="file-upload"
          onChange={handleFileUpload}
          className="hidden"
        />
        <label
          htmlFor="file-upload"
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
        >
          Browse Files
        </label>
        <button className="text-blue-600">Recent uploads</button>
      </div>
    </div>
  );
};

export default FileUploader;
