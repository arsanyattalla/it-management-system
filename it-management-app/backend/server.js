require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/users", require("./routes/users"));
//app.use("/api/assets", require("./routes/assets"));
//app.use("/api/links", require("./routes/links"));
app.get("/", (req, res) => {
  res.send("IT Management API is running 🚀");
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
