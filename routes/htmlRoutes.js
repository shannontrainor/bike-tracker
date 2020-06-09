const router = require("express").Router();
const path = require("path");

//require express & require router function (creates router)

    // add routes

    //HTML routes for displaying homepage
    router.get("/", (req, res) => {
        const filePath = path.join(__dirname, "..", "public", "html", "index.html");   //join folders/files together - dirname = path to current file
        res.sendFile(filePath);
    });




















  // export router created    
  module.exports = router;