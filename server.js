const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGODB_URI || 'mongodb://localhost/nytreact';

mongoose.connect(url);

app.use(express.static(__dirname));
app.use(bodyParser.json());

require("./api/api-routes")(app);

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`serverlisteningon${PORT}`);
});