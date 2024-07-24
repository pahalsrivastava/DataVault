// routes/uploadRoute.js
import express from 'express';
import multer from 'multer';
import File from '../models/File.js';


const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store the files
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName); // Renaming the file to avoid conflicts
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { originalname, filename, path } = req.file;

    // Save file metadata to the database
    const file = new File({
      originalName: originalname,
      fileName: filename,
      filePath: path,
    });

    await file.save();

    res.status(200).json({ message: 'File uploaded successfully!', filePath: `/uploads/${filename}` });
  } catch (error) {
    res.status(500).json({ message: 'File upload failed.' });
  }
});

// Route to get all uploaded files
router.get('/files', async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve files.' });
  }
});

export default router;
