import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["link", "image"],
    ["clean"], // Removes formatting
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "blockquote",
  "code-block",
  "align",
  "color",
  "background",
  "link",
  "image",
];

const TextEditor = () => {
  const [value, setValue] = useState("");


  useEffect(() => {
    console.log(value)
  },[]);

  // Function to save content to database
  const saveToDatabase = async () => {
    try {
      const response = await fetch("http://localhost:5000/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: value }), // Send editor content as JSON
      });

      const data = await response.json();
      alert(data.message); // Show success message
    } catch (error) {
      console.error("Error saving content:", error);
      alert("Failed to save");
    }
  };

  return (
    <div className="text-editor-container" style={{ maxWidth: "95%", padding: "20px" }}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
      <button onClick={saveToDatabase} style={{ marginTop: "10px", padding: "10px" }}>
        Save to Database
      </button>
    </div>
  );
};

export default TextEditor;
