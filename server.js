const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const cron = require("node-cron");
const connectDB = require("./config/db");
const deleteOldFiles = require("./oldFileDelete/deleteOldFiles");

const app = express();

app.use(cors());

// Parse URL-encoded bodies (usually form data)
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies
app.use(bodyParser.json());

// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("API running");
});

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/pdf", require("./routes/api/pdf"));

// Serve files from the 'uploads' directory

// Expose a route to serve the PDF file
app.get("/uploads/:filename", (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, "uploads", filename));
});

// Schedule the deletion task to run every hour
cron.schedule("0 * * * *", () => {
  deleteOldFiles();
});

// Example: Run the task immediately on server start (optional)
deleteOldFiles();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
