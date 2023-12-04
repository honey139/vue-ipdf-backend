const Pdf = require("../models/Pdf");
const fs = require("fs");

// Scheduled task to delete files older than two hours
async function deleteOldFiles() {
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000); // Two hours ago

  console.log(twoHoursAgo);
  try {
    // Find files older than two hours
    const filesToDelete = await Pdf.find({ uploadTime: { $lt: twoHoursAgo } });

    filesToDelete.forEach(async (file) => {
      try {
        // Delete file from storage (assuming files are stored in a directory)
        fs.unlinkSync(`./uploads/${file.name}`);

        // Delete file from the database
        await Pdf.findByIdAndDelete(file._id);
        console.log(`File ${file.name} deleted.`);
      } catch (error) {
        console.error(`Error deleting file ${file.name}:`, error);
      }
    });
  } catch (error) {
    console.error("Error finding files:", error);
  }
}

module.exports = deleteOldFiles;
