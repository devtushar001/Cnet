import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EscomContext } from "../../Context/escomContext";

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
  const [value, setValue] = useState("");  // Store the editor's content
  // const [getValue, setGetValue] = useState([]);
  const {getValue, deleteContentm, getFetchData } = useContext(EscomContext);

  // Function to save content to the database
  const saveToDatabase = async () => {
    try {
      const response = await fetch("http://localhost:30017/api/text-edit/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: value }), // Send editor content as JSON
      });

      const data = await response.json();
      alert(data.message); // Show success message
      getFetchData();
    } catch (error) {
      alert("Failed to save");
    }
  };

  // Function to fetch data from the database
  // const getFetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:30017/api/text-edit/get", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await response.json();
  //     setGetValue(data);  // Set fetched data in state
  //   } catch (error) {
  //     alert("Failed to fetch data");
  //   }
  // };

  // Function to delete content from the database
  // const deleteContent = async (id) => {
  //   try {
  //     const response = await fetch(`http://localhost:30017/api/text-edit/delete`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await response.json();
  //     if (data.success) {
  //       // Remove deleted content from UI
  //       setGetValue(getValue.filter(content => content.id !== id));
  //       alert("Content deleted successfully");
  //     } else {
  //       alert("Failed to delete content");
  //     }
  //   } catch (error) {
  //     alert("Failed to delete content");
  //   }
  // };

  return (
    <div className="text-editor-container" style={{ maxWidth: "95%", padding: "20px" }}>
      <ReactQuill
        theme="snow"
        value={value}  // Bind the editor to the value state
        onChange={setValue}  // Update value when the content changes
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
