const fs = require("fs");
// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your Index.html file has been generated")
    });
}
module.exports = writeToFile;