const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(
        /__TITLE__/g,
        "Professional Pressure Cleaning - Total Exterior Cleaning"
      )
      .replace(
        /__DESCRIPTION__/g,
        "Sydney's Best Pressure Cleaners. Professional Pressure Washers specialising in high or soft pressure washing. Get Your Quote Now"
      );

    res.send(data);
  });
});

app.get("/pressure-wash", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(
        /__TITLE__/g,
        "Professional Pressure Washing | House Washing Sydney"
      )
      .replace(
        /__DESCRIPTION__/g,
        "Sydney's Best Pressure Cleaners. Professional Pressure Washers specialising in high or soft pressure washing. Get Your Quote Now"
      );

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
