import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyEditor = ({setHandleValue,setSubmit})=> {
  const [defaultValue,setDefault] = useState("");
  const toolbarOptions = [
    [{ header: [1, 2, 3, false] }], // Dropdown for headers
    ["bold", "italic", "underline"], // Formatting buttons
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    ["link", "image"], // Link and image buttons
    ["clean"], // Clear formatting button
  ];

  const handleChange=(val)=>{
    setDefault(val)
    setHandleValue(val)
  }


  return <>
  
  <ReactQuill theme="snow" modules={{ toolbar: toolbarOptions }} value={defaultValue} onChange={handleChange} />
  <div className="my-8">
              <button onClick={setSubmit} className="bg-orange-600 duration-300 tracking-[3px] uppercase text-slate-900 border hover:shadow-md p-5 hover:-translate-y-2 rounded-md hover:shadow-black ">
                Submit Blog
              </button>
            </div>
  </>
  ;
}

export default MyEditor;