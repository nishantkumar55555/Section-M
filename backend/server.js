const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Nishant24:Nishant24@cluster0.p8gywnu.mongodb.net/");

const User = mongoose.model("User", {
  name: String
});

app.post("/users", async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.send(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
