import express from "express";

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(PORT, () => console.log(`Express server is listening on port ${PORT}`));
