const express = require("express");
const mongoose = require("mongoose");

const app = express();
const routers = require("./routers/appRouter");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);
var cors = require('cors')
app.use(cors())
const port = 3000;
const url =
  "mongodb+srv://user1:12345678Te@cluster0.rbvla.mongodb.net/Quiz?retryWrites=true&w=majority";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Db is connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, function () {
  console.log("server is running");
});