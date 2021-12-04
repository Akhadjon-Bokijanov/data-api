const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .get("/api/items", (req, res) => {
    let file = req.query.file;
    fs.readFile(`./data/${file}.json`, (err, json) => {
      let obj = JSON.parse(json);
      res.json(obj);
    });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
