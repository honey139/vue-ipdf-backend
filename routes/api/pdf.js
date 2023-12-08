const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const multer = require("multer");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const compressFiles = require("./compressFile");
const fileSize = require("./fileSize");

const Pdf = require("../../models/Pdf");

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

const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "temp_uploads//"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    // Rename the file - you can customize this as needed
    cb(null, `${Date.now()}.pdf`);
  },
});

const upload2 = multer({ storage: storage2 });

//upload megered PDF
router.post("/pdf_upload", upload.single("pdf"), async (req, res) => {
  try {
    const uploadedFile = req.file;
    const newPdf = await Pdf.create({ name: uploadedFile.filename });

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
    Pdf.deleteOne({ name: req.body.file }).then(() => {
      console.log("file name deleted from DB");
      res.send("delete success");
    });
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

//get file updated time
router.get("/time/:name", async (req, res) => {
  console.log(req.params.name);
  await Pdf.findOne({ name: req.params.name })
    .then((data) => {
      res.status(200).send(data.uploadTime);
    })
    .catch((err) => res.status(500).send("File not found"));
});

//Endpoint for express-files
router.post("/pdf_compress", upload2.array("files"), async (req, res) => {
  // req.files contains the uploaded files
  console.log(req.body.level);
  let level = req.body.level;
  let files = req.files;
  compressFiles(files, level)
    .then((outfiles) => {
      if (outfiles.length > 1) {
        const parentDirectory = path.join(__dirname, "../../uploads/"); // Parent directory path
        const directoryPath = "./temp_uploads/"; // temp_directory
        // Create a zip file in the parent directory
        const uploaded_zip = `${Date.now()}.zip`;
        const zipFileName = path.join(parentDirectory, uploaded_zip);
        const output = fs.createWriteStream(zipFileName);
        const archive = archiver("zip", {
          zlib: { level: 9 }, // Compression level (0-9)
        });

        output.on("close", () => {
          fs.readdir(directoryPath, (err, files) => {
            if (err) {
              console.error("Error reading directory:", err);
              return;
            }

            files.forEach((file) => {
              const filePath = path.join(directoryPath, file);

              fs.unlink(filePath, (err) => {
                if (err) {
                  console.error(`Error deleting file ${file}:`, err);
                } else {
                  console.log(`Deleted file: ${file}`);
                }
              });
            });
          });

          const newPdf = Pdf.create({ name: uploaded_zip });
          fileSize(`./uploads/${uploaded_zip}`).then((size) => {
            console.log(size);
            res.send({ file: uploaded_zip, reSize: size });
          });
        });

        archive.on("error", (err) => {
          res.status(500).send({ error: `Error creating zip: ${err}` });
        });

        archive.pipe(output);

        // Add PDF files to the zip file
        outfiles.forEach((pdfFile) => {
          archive.file(pdfFile, { name: pdfFile });
        });

        archive.finalize();
      } else {
        const sourcePath = outfiles[0]; // Replace with the path to the source file
        const uploaded_pdf = `${Date.now()}.pdf`;
        const destinationPath = `./uploads/${uploaded_pdf}`; // Replace with the path to the destination
        //delete origin file
        files.forEach(async (file) => {
          try {
            // Delete file from storage (assuming files are stored in a directory)
            fs.unlinkSync(`./temp_uploads/${file.filename}`);

            // Delete file from the database
            await Pdf.findByIdAndDelete(file._id);
            console.log(`File ${file.filename} deleted.`);
          } catch (error) {
            console.error(`Error deleting file ${file.filename}:`, error);
          }
        });

        // Move file from source directory to destination directory
        fs.rename(sourcePath, destinationPath, async (err) => {
          if (err) {
            console.error("Error moving file:", err);
          } else {
            console.log("File moved successfully!");
            const newPdf = Pdf.create({ name: uploaded_pdf });
            fileSize(`./uploads/${uploaded_pdf}`).then((size) => {
              console.log(size);
              res.send({ file: uploaded_pdf, reSize: size });
            });
          }
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

router.post("/upload_dropbox", async (req, res) => {
  const fileName = req.body.fileName;
  try {
    const filePath = `./uploads/${fileName}`;
    const fileContents = fs.readFileSync(filePath);

    // Upload file to Dropbox
    const dbx = new Dropbox.Dropbox({
      accessToken: "YOUR_DROPBOX_ACCESS_TOKEN",
    });
    const response = await dbx({
      resource: "files/upload",
      parameters: {
        path: "/path/in/dropbox/file.txt", // Update with the desired path in Dropbox
      },
      readStream: fileContents,
    });

    res.json({
      success: true,
      message: "File uploaded to Dropbox",
      data: response,
    });
  } catch (error) {
    console.error("Error uploading file to Dropbox:", error);
    res
      .status(500)
      .json({ success: false, message: "Error uploading file to Dropbox" });
  }
});

module.exports = router;
