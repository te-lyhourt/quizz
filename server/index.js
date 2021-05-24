const express = require("express");
const mongoose = require("mongoose");

const app = express();
const routers = require("./routers/appRouter");
const cors = require('cors')




app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);

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