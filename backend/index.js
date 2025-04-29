const cors = require("cors");
const express = require("express");
const port = 5000;
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
