const express = require("express");
const bodyParser = require("body-parser");
const { connectDb } = require("./utils/dbConnection");
const cors = require("cors");
require("dotenv").config();

const app = express();
console.log(process.env.ORIGIN);
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.json());

connectDb()
  .then(() => {
    const PORT = process.env.PORT || 4444;
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect: ", err);
  });
