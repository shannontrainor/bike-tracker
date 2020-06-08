const express = require ("express");
const app = express();

const PORT = 8080;

//include api routes being exported
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//content
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
