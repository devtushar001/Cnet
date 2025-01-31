import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const { data } = await axios.get("http://localhost:5000/api/images");
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/upload", formData);
      alert("Image uploaded successfully!");
      fetchImages();
    } catch (error) {
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      <h3>Uploaded Images</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((img) => (
          <div key={img._id} style={{ margin: "10px" }}>
            <img src={img.imageUrl} alt="Uploaded" width="150px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
