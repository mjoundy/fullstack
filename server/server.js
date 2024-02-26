const express = require("express");
const app = express();
const port = 3002;
const mongoose = require("mongoose");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

mongoose
  .connect(
    `mongodb+srv://joundymariem:${process.env.MONGODB_PASSWORD}@cluster0.4m7n9cs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
