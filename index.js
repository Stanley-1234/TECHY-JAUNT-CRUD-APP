const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(morgan ('dev'));

app.get('/', (req,res) => {
  res.send("Welcome to the TECH JAUNTY blog app; Please register an account if not already a member, otherwise login to continue ")
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected Successfully"));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/posts", require("./routes/post.routes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
