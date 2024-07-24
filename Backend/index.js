import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
import path from 'path';


dotenv.config();

const app = express();

app.use(express.json());


app.use(cors());

app.use('/user', userRoute);


app.use('/api', uploadRoute);

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));


app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello World!");
});


mongoose.connect(process.env.URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

