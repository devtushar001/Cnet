import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import { getImageController, uploadImageController } from "../Controller/imageController.js";

const imageRouter = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mern-uploads",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

imageRouter.post("/upload", upload.single("image"), uploadImageController);
imageRouter.get("/images", getImageController);

export default imageRouter;
