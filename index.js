const express = require("express");
const app = express();




app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.post("/data", (req, res) => {
    res.type("json");
    res.send(`{
        "city": "New Orleans",
        "state": "LA",
        "population": "364,000"
        }`);
  res.status(200).json({ message: "Data received successfully" });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
