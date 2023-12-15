"use strict";

const path = require("path");
const fs = require("fs").promises;
const { exec } = require("child_process");

const libre = require("libreoffice-convert");
libre.convertAsync = require("util").promisify(libre.convert);

function wordToPdf(files) {
  return new Promise((resolve, reject) => {
    let outFiles = [];
    const ext = ".pdf";
    files.forEach(async (file) => {
      const sourceFilePath = await `temp_uploads/${file.filename}`;
      const outputFilePath = await `temp_uploads/${
        file.filename.split(".")[0]
      }.docs`;

      // const libreOfficeCommand = `libreoffice --convert-to docx --outdir ${outputFilePath} ${sourceFilePath}`;
      const libreOfficeCommand = `lowriter --headless --infilter=writer_pdf_import --convert-to doc:"MS Word 97" ${sourceFilePath}`;

      exec(libreOfficeCommand, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error converting PDF to Word: ${stderr}`);
        } else {
          console.log(`PDF successfully converted to Word: ${stdout}`);
          outFiles.push(outputFilePath);
          if (outFiles.length == files.length) {
            resolve(outFiles);
          }
        }
      });
    });
  });
}

module.exports = wordToPdf;
