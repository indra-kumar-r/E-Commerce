const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./Components/Routers/Routers");
const db = require("./Components/Config/Mongoose");

const app = express();
let PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

db.then(() => {
  console.log("Database connected");
  app.use(router);
  app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log("Error in database connection", error);
});
