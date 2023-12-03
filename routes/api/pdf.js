const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const multer = require("multer");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination directory where uploaded files will be stored
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Define the filename of the uploaded file
    cb(null, uuidv4() + ".pdf");
  },
});

// Create a Multer instance with the configured storage
const upload = multer({ storage: storage });

// Set up Multer storage configuration(splited files)
const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination directory where uploaded files will be stored
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Define the filename of the uploaded file
    cb(null, uuidv4() + ".zip");
  },
});

// Create a Multer instance with the configured storage(splited pdf)
const upload1 = multer({ storage: storage1 });

//upload megered PDF
router.post("/pdf_upload", upload.single("pdf"), async (req, res) => {
  try {
    const uploadedFile = req.file;

    if (!uploadedFile) {
      return res.status(400).send("No file uploaded");
    }

    // Process the uploaded PDF file here (e.g., save it, manipulate it, etc.)
    res.status(200).send(uploadedFile.filename);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing file");
  }
});

//delete merged pdf files
router.post("/delete", (req, res) => {
  const filePath = `uploads/${req.body.file}`; // Replace this with the path to your file

  fs.unlink(filePath, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send("delete success");
  });
});

//upload splited pdf's Zip
router.post("/zip_upload", upload1.single("file"), async (req, res) => {
  try {
    const uploadedFile = req.file;

    if (!uploadedFile) {
      return res.status(400).send("No file uploaded");
    }
    // Process the uploaded PDF file here (e.g., save it, manipulate it, etc.)
    res.status(200).send(uploadedFile.filename);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing file");
  }
});

// Endpoint for file download
router.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = `./uploads/${fileName}`; // Path to the file to be downloaded

  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

module.exports = router;
