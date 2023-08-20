var express = require('express');
const cors = require('cors');
const path = require('path');
const nodes = require('./nodes');
const multer = require('multer');
const validateData = require('./utils/validateData');
const mongoose = require('mongoose');
const MONGODB_URI =
  'mongodb+srv://keepcalmpk:7csAuaW6KqwAIPQE@cluster0.6yqzhur.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URI
const Canvas = require('./models/Canvas');
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log(`MongoDB Connected!`))
  .catch((err) => console.log(err));

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../dist')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/'); // Set your upload directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get('/get-nodes', (req, res) => {
  res.status(200).json(nodes);
});

app.post('/submit-form', upload.single('files'), (req, res) => {
  const nonFileData = req.body; // Non-file JSON data
  const uploadedFile = req.file; // Uploaded file data

  const fileURLKey = nonFileData['files_fieldId'];
  const finalFormDataToBeValidated = {
    ...nonFileData,
    [fileURLKey]:
      uploadedFile &&
      uploadedFile.filename &&
      path.resolve(__dirname, 'public', uploadedFile?.filename),
  };

  const { config, ...actualFormData } = finalFormDataToBeValidated;
  const { everythingIsValid, nonValidFieldIdsWithMsg } = validateData(
    JSON.parse(config),
    actualFormData
  );

  res.json({ everythingIsValid, nonValidFieldIdsWithMsg });
});

app.post('/save-the-scene', async (req, res) => {
  const { canvasNodes: canvasNodesStr, canvasEdges: canvasEdgesStr } = req.body;
  const canvasNodes = JSON.parse(canvasNodesStr);
  const canvasEdges = JSON.parse(canvasEdgesStr);
  const canvasRec = {
    userId: 'PK', // will be received from req.body.userId for multi user
    canvasNodes,
    canvasEdges,
  };
  await Canvas.updateOne(
    { userId: 'PK' },
    { $set: canvasRec },
    {
      upsert: true,
    }
  );
  res.json({ message: 'Saved scene' });
});

app.get('/fetch-the-scene', async (req, res) => {
  const scene = await Canvas.findOne({ userId: 'PK' }); // will be received from req.query.userId for multi user
  res.json({ scene });
});

app.listen(4000, () => console.log(`server started`));
