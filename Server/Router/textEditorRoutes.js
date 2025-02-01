import express from express;
import { saveTextEditorController,getTextEditorController } from "../Controller/textEditorController.js";


const textEditorRouter = express.Router();

// Configure Multer to use memory storage
const storage = multer.memoryStorage(); 

const upload = multer({ storage });

textEditorRouter.post("/save", upload.array("images", 10), saveTextEditorController);
textEditorRouter.get("/get", getTextEditorController);

export default textEditorRouter;
