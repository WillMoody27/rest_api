const express = require("express");
const studentRoutes = require("./src/student/routes");
const app = express();
const port = 3000;

// MIDDLEWARE
app.use(express.json()); // parse incoming JSON data

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// CREATE Route to Student routes
app.use("/api/v1/students", (req, res, next) => {
  studentRoutes(req, res);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
