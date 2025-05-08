const cors = require("cors");
const express = require("express");
const signInRoute = require("./routes/signInRoute");
const paylogRoute = require("./routes/paylogRoute");
const port = 5000;
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/login",signInRoute);
app.use("/paylog",paylogRoute);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
