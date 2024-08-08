import React, { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { useDropzone } from 'react-dropzone';

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
      'application/pdf': [],
      // Agrega más tipos de archivos según sea necesario
    },
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles]);
    },
  });

  const handleDelete = (file) => {
    setFiles(files.filter(item => item.path !== file.path));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Arrastra y suelta archivos aquí, o haz clic para seleccionar.</p>
      </div>
      <ul>
        {files.map(file => (
          <li key={file.name} className="flex items-center justify-between">
            {file.name}
            <button onClick={() => handleDelete(file)}>
              <FaRegTrashAlt className="h-5 w-5 text-red-500" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploader;