const express = require("express");
const app = express();
const port = 3002;
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/Users");
app.use(express.urlencoded({ extended: true }));
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get("/users", (req, res) => {
  res.send("Hello World!!");
});
app.get("/users", async (req, res) => {

  const users = await UserModel.find();

  res.json(users);
  console.log("date save")
});

app.post("/createuser", (req, res) => {
  const newUser = new User(req.body);
  console.log(req.body)
  newUser
    .save()
    .then((result) => {
      console.log("data saved");
    })
    .catch((err) => {
      console.log(err);
    });
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
