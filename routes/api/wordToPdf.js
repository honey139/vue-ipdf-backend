"use strict";

const path = require("path");
const fs = require("fs").promises;

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
      }.pdf`;

      // Read file
      const docxBuf = await fs.readFile(sourceFilePath);

      // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
      let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);

      // Here in done you have pdf file which you can save or transfer in another stream
      await fs.writeFile(outputFilePath, pdfBuf);
      console.log("complete");
      outFiles.push(outputFilePath);
      if (outFiles.length == files.length) {
        resolve(outFiles);
      }
    });
  });
}

module.exports = wordToPdf;
