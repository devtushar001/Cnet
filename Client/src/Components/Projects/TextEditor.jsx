import React, { useRef, useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EscomContext } from "../../Context/escomContext";
import { debounce } from "lodash";

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
  const quillRef = useRef(null); // Ref for ReactQuill
  const [value, setValue] = useState(""); // Store editor content
  const { getValue, deleteContent, getFetchData } = useContext(EscomContext);

  // Save content to database
  const saveToDatabase = async () => {
    try {
      const response = await fetch("http://localhost:30017/api/text-edit/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: value }),
      });

      const data = await response.json();
      alert(data.message); // Show success message
      debouncedFetchData(); // Refresh fetched data
    } catch (error) {
      alert("Failed to save");
    }
  };

  // Debounce API calls to prevent 429 errors
  const debouncedFetchData = debounce(() => {
    getFetchData();
  }, 1000); // 1-second delay

  useEffect(() => {
    console.log("Editor Content:", value);
  }, [value]);

  return (
    <div className="text-editor-container" style={{ maxWidth: "95%", padding: "20px" }}>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
      <button onClick={saveToDatabase} style={{ marginTop: "10px", padding: "10px" }}>
        Save to Database
      </button>

      {/* Render each fetched content with a delete button */}
      {getValue.map((content, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
          <button onClick={() => deleteContent(content._id)}> Delete </button>
        </div>
      ))}
    </div>
  );
};

export default TextEditor;
