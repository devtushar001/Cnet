import imageModel from "../Models/ImageModel.js";

export const uploadImageController = async (req, res) => {
  try {
    console.log(req.file)
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const image = new imageModel({
      imageUrl: req.file.path,
      imageId: req.file.filename,
    });

    await image.save();
    res.json({ success: true, imageUrl: req.file.path, imageId: req.file.filename });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getImageController = async (req, res) => {
  try {
    const images = await imageModel.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
