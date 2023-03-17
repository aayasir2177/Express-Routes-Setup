const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;

// Routes
const view = require(path.join(__dirname, "routes", "view.js"));

// Giving Access to Static Files
app.use("/static", express.static(path.join(__dirname, "public")));

// Setting Home Route
app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Setting View Route
app.use("^/$|/view(.html)?", view);

// Setting 404 Route
app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Listening to port
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
