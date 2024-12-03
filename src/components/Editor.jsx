import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyEditor = ()=> {
  const [value, setValue] = useState('');
  const toolbarOptions = [
    [{ header: [1, 2, 3, false] }], // Dropdown for headers
    ["bold", "italic", "underline"], // Formatting buttons
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    ["link", "image"], // Link and image buttons
    ["clean"], // Clear formatting button
  ];

  return <ReactQuill theme="snow" modules={{ toolbar: toolbarOptions }} value={value} onChange={setValue} />;
}

export default MyEditor;