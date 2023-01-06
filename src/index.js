const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require('cors')
const router = require("./routes/user/user.controller");
const port = 4000;
const app = express();
app.use(express.json());
app.use(cors())

mongoose
  .connect("mongodb://localhost:27017/MarksKitchen1")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Couldn't connected to MongoDB, ${error}`));

app.use("/users", router);

app.listen(port, () => console.log("App is listening at port "+ port));
