// This store all the queries for the tables
const { Router } = require("express");
const controller = require("./controller"); // import controller object to use functions
const router = Router(); // router object from express

// GET Routes
router.get("/", controller.getStudents); // get all students
router.get("/:id", controller.getStudentById); // get student by ID

// POST Routes
router.post("/", controller.createStudent); // create student

// PUT Routes
router.put("/:id", controller.updateStudent); // update student by ID

// DELETE Routes
router.delete("/:id", controller.deleteStudent); // delete student by ID

module.exports = router; // export router object to use in server.js
