const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");
const app = express();
const PORT = 8000;

app.use(status());
app.get("/", (req, res) => {
  const stream = fs.createReadStream("sample.txt", "utf-8");
  stream.on("data", (chunk) => {
    res.write(chunk);
  });
  stream.on("end", () => {
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`);
});
