const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { exec } = require("child_process");
const multer = require("multer");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");
const archiver = require("archiver");
const compressFiles = require("./compressFile");
const fileSize = require("./fileSize");
const wordToPdf = require("./wordToPdf");
const pdfToWord = require("./pdfToWord");
const splitPdf = require("./splitPdf");
const auth = require("../../middleware/auth");

const Pdf = require("../../models/Pdf");
const Clients = require("../../models/Clients");
const Blog = require("../../models/Blog");

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
    cb(null, "temp_uploads/"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    // Rename the file - you can customize this as needed
    cb(null, uuidv4() + ".pdf");
  },
});

const upload2 = multer({ storage: storage2 });

const storage3 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "temp_uploads/"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    // Rename the file - you can customize this as needed
    cb(null, uuidv4() + ".docx");
  },
});
const upload3 = multer({ storage: storage3 });

const storage4 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    // Rename the file - you can customize this as needed
    cb(null, uuidv4() + ".png");
  },
});
const upload4 = multer({ storage: storage4 });

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
    console.error("error: " + error);
    res.status(500).send("Error processing file");
  }
});

//upload edited_pdf_upload
router.post("/edited_pdf_upload", upload.single("files"), async (req, res) => {
  try {
    const uploadedFile = req.file;
    const newPdf = await Pdf.create({ name: uploadedFile.filename });

    if (!uploadedFile) {
      return res.status(400).send("No file uploaded");
    }
    const deletes = req.body.deletes;
    const files = deletes.split(",");
    console.log(files);

    files.forEach((file) => {
      const filePath = path.join("./uploads/", file);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file ${file}:`, err);
        } else {
          console.log(`Deleted file: ${file}`);
        }
      });
    });

    // Process the uploaded PDF file here (e.g., save it, manipulate it, etc.)
    res.status(200).send(uploadedFile.filename);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing file");
  }
});

//upload png files
router.post("/png_upload", upload4.array("files"), async (req, res) => {
  try {
    let files = req.files;

    // Process the uploaded PDF file here (e.g., save it, manipulate it, etc.)
    res.status(200).send(files);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing file");
  }
});

//delete  pdf files
router.get("/delete/:file", (req, res) => {
  console.log(req.params.file);
  const filePath = `uploads/${req.params.file}`; // Replace this with the path to your file
  fs.unlink(filePath, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    Clients.findOne({ file: req.params.file }).then((clients) => {
      clients.deleted = true;
      clients.save();
    });

    Pdf.deleteOne({ name: req.params.file }).then(() => {
      console.log("file name deleted from DB");
      res.send("delete success");
    });
  });
});

//upload splited pdf's Zip
router.post("/zip_upload", upload1.single("file"), async (req, res) => {
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

// Endpoint for file download
router.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = `./uploads/${fileName}`; // Path to the file to be downloaded

  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("File not existing");
    }
  });
});

//get file name from DB
router.post("/get_from_db", async (req, res) => {
  console.log(req.body.name);
  await Pdf.findOne({ name: req.body.name })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(500).send("File not found"));
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

//Endpoint for split_files
router.post("/pdf_split", upload2.single("file"), async (req, res) => {
  let items = JSON.parse(req.body.items);
  let merge_flag = items.merge_flag;
  let pages = items.pages;
  file = req.file;
  const data = await fs.promises.readFile(`temp_uploads/${file.filename}`);
  const readPdf = await PDFDocument.load(data);
  splitPdf(readPdf, pages, merge_flag, file.filename).then((outFiles) => {
    compressFiles(outFiles, 100)
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
                  }
                });
              });
            });

            const newPdf = Pdf.create({ name: uploaded_zip });
            res.send(uploaded_zip);
          });

          archive.on("error", (err) => {
            res.status(500).send({ error: `Error creating zip: ${err}` });
          });

          archive.pipe(output);

          // Add PDF files to the zip file
          outfiles.forEach((pdfFile, index) => {
            archive.file(pdfFile, {
              name: `${file.originalname.split(".")[0]}_splitted(${index}).pdf`,
            });
          });

          archive.finalize();
        } else {
          const sourcePath = outfiles[0]; // Replace with the path to the source file
          const uploaded_pdf = `${Date.now()}.pdf`;
          const destinationPath = `./uploads/${uploaded_pdf}`; // Replace with the path to the destination
          //delete origin file

          fs.unlinkSync(`./temp_uploads/${file.filename}`);

          // Move file from source directory to destination directory
          fs.rename(sourcePath, destinationPath, async (err) => {
            if (err) {
              console.error("Error moving file:", err);
            } else {
              console.log("File moved successfully!");
              const newPdf = Pdf.create({ name: uploaded_pdf });

              res.send(uploaded_pdf);
            }
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
});

//Endpoint for express-files
router.post("/pdf_compress", upload2.array("files"), async (req, res) => {
  // req.files contains the uploaded files
  let level = req.body.level;
  let files = req.files;
  let names = files.map((file) => {
    return file.filename;
  });
  compressFiles(names, level)
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
        outfiles.forEach((pdfFile, index) => {
          archive.file(pdfFile, {
            name: `${files[index].originalname.split(".")[0]}_compressed.pdf`,
          });
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

router.post("/wordtopdf", upload3.array("files"), async (req, res) => {
  // req.files contains the uploaded files
  let degree = req.body.degrees.split(",");
  let files = req.files;
  console.log(degree);
  wordToPdf(files, degree).then((outfiles) => {
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
              }
              // else {
              //   console.log(`Deleted file: ${file}`);
              // }
            });
          });
        });
        const newPdf = Pdf.create({ name: uploaded_zip });
        res.send(uploaded_zip);
      });

      archive.on("error", (err) => {
        res.status(500).send({ error: `Error creating zip: ${err}` });
      });

      archive.pipe(output);

      // Add PDF files to the zip file
      outfiles.forEach((pdfFile, index) => {
        archive.file(pdfFile, {
          name: `${files[index].originalname.split(".")[0]}.pdf`,
        });
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
          // console.log(`File ${file.filename} deleted.`);
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

          res.send(uploaded_pdf);
        }
      });
    }
  });
});

router.post("/pdf_to_word", upload2.array("files"), async (req, res) => {
  let files = req.files;
  pdfToWord(files)
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

          res.send(uploaded_zip);
        });

        archive.on("error", (err) => {
          res.status(500).send({ error: `Error creating zip: ${err}` });
        });

        archive.pipe(output);

        // Add PDF files to the zip file
        outfiles.forEach((pdfFile, index) => {
          archive.file(pdfFile, {
            name: `${files[index].originalname.split(".")[0]}.docx`,
          });
        });

        archive.finalize();
      } else {
        const sourcePath = outfiles[0]; // Replace with the path to the source file
        const uploaded_docx = `${Date.now()}.docx`;
        const destinationPath = `./uploads/${uploaded_docx}`; // Replace with the path to the destination
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
            const newPdf = Pdf.create({ name: uploaded_docx });

            res.send(uploaded_docx);
          }
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

router.get("/latestBlogs", async (req, res) => {
  Blog.find()
    .sort({ uploadTime: -1 }) // Sort by createdAt in descending order
    .limit(3) // Limit the results to 3 items
    .exec((err, blogs) => {
      if (err) {
        res.status(400).json({ err: "not found blogs" });
        return;
      }
      res.json(blogs);
    });
});

router.get("/allBlogs", async (req, res) => {
  Blog.find()
    .sort({ uploadTime: -1 }) // Sort by createdAt in descending order
    .exec((err, blogs) => {
      if (err) {
        res.status(400).json({ err: "not found blogs" });
        return;
      }
      res.json(blogs);
    });
});

router.get("/blog/:title", async (req, res) => {
  const title = req.params.title.replace(/-/g, " ");
  const blog = await Blog.findOne({ title: title });
  // const blog = await Blog.findById(req.params.id);
  await Blog.find({}, "id title", function (err, blogs) {
    if (err) {
      res.status(400).json({ error: [{ msg: "Server Error" }] });
      // Handle error
    } else {
      // Handle clients data
      res.json({ blog: blog, titles: blogs });
    }
  });
});

module.exports = router;
