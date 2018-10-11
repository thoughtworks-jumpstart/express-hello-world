const express = require('express');
const path = require("path");
const app = express();
const PORT = 3000;

// return the index.html file on a GET request to '/'
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/index.html"), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

// return text as html text on a GET request to /msg1
app.get("/msg1", function(req, res) {
  res.send("Hello World2!");
});

// return json data on a GET to /msg2
app.get('/msg2', (req, res, next) => {
    res.json({name: "Angeline", message: 'Hello World People!'});
});

const server = app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
});