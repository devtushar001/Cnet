import textEditorModel from "../Models/textEditorModel.js";
export const saveTextEditorController = async (req, res) => {
  try {
    const { content } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];

    const newContent = new textEditorModel({ content, images });
    await newContent.save();

    res.status(201).json({ message: "Content saved successfully", data: newContent });
  } catch (error) {
    res.status(500).json({ message: "Error saving content", error });
  }
};

// Fetch All Content
export const getTextEditorController = async (req, res) => {
  try {
    const content = await Editor.find();
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
};

// export { saveTextEditorController, getTextEditorController };
