import "./App.css";
import React from "react";

// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  return (
    <div {...getRootProps()}>
      <input className="dropzone_input" {...getInputProps()} />
      <div>
        {isDragActive ? (
          <p className="dropzone_content">Release to drop the files here</p>
        ) : (
          <p className="dropzone_content">
            Drag and drop some brain picture here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
};

export default Dropzone;