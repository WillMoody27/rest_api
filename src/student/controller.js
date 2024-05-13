// Will store business logic related to each route
const pool = require("../../db"); // import pool object from db.js to use queries
const queries = require("./queries"); // import query object to use queries

// GET all students
const getStudents = (req, res) => {
  pool.query(queries.getStudentsQuery, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

// GET student by ID
const getStudentById = (req, res) => {
  const id = parseInt(req.params.id); // get id from URL

  pool.query(queries.getStudentByIdQuery, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

// POST create student
const createStudent = (req, res) => {
  const { name, email, age, dob } = req.body; // get data from request body

  // Check if email already exists in DB
  pool.query(queries.checkIfEmailExistsQuery, [email], (error, results) => {
    // Logic To Check If Email Already Exists
    if (results.rows.length) res.status(400).send("Email already exists");
    // Logic To Add Student If Email Does Not Exist
    pool.query(
      queries.addStudentQuery,
      [name, email, age, dob],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).json({ ...req.body, id: results.insertId });
      }
    );
  });
};

// PUT update student by ID
const updateStudent = (req, res) => {
  const id = parseInt(req.params.id); // get id from URL

  const { name } = req.body; // get data from request body

  // Check if student exists by getting student by ID
  pool.query(queries.getStudentByIdQuery, [id], (error, results) => {
    const noStudentsFound = !results.rows.length; // check if no students found
    if (noStudentsFound) res.status(400).send("Student not found");

    // Update the student if student exists
    pool.query(queries.updateStudentQuery, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send(req.body);
    });
  });
};

// DELETE student by ID
const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id); // get id from URL

  //  Check if student exists by getting student by ID
  pool.query(queries.getStudentByIdQuery, [id], (error, results) => {
    const noStudentsFound = !results.rows.length; // check if no students found
    if (noStudentsFound) {
      res.status(400).send("Student not found");
    }

    // Delete student
    pool.query(queries.removeStudentQuery, [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({ message: `Student deleted with ID: ${id}` });
    });
  });
};

// Export multiple functions
module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
};
