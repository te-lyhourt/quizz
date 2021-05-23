const express = require("express");

const mongoose = require("mongoose");
const path = require("path");
const app = express();
// const router = require("./routes/admin");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// app.set("view engine", "ejs");
// app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use(express.static(path.join(__dirname, "public")));
// app.use(router);

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