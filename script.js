const fs = require("fs");
const csv = require("csv-parser");
const args = process.argv.slice(2);
const coderDojoNumber = args[0];

const inputFilePath = "./teilnehmer.csv";
const teilnehmer = [];
fs.createReadStream(inputFilePath)
  .pipe(
    csv({
      mapHeaders: ({ header, index }) => {
        let newHeader;
        switch (index) {
          case 0:
            newHeader = "nachname";
            break;
          case 1:
            newHeader = "vorname";
            break;
          case 2:
            newHeader = "code";
            break;
          case 3:
            newHeader = "alter";
            break;
          case 4:
            newHeader = "leihlaptop";
            break;
          case 5:
            newHeader = "email";
            break;
          case 6:
            newHeader = null;
            break;
          default:
            newHeader = header;
            break;
        }
        return newHeader;
      }
    })
  )
  .on("data", data => {
    if (data[coderDojoNumber] == "x") {
      teilnehmer.push(data.email);
    }
  })
  .on("end", () => {
    console.log("done", teilnehmer);
  });
