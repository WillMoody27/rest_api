// This will store all sql queries for DB

// GET QUERIES
const getStudentsQuery = "SELECT * FROM students;";
const getStudentByIdQuery = "SELECT * FROM students WHERE id = $1;"; // $1 is a placeholder for the first value in the values array

// POST QUERIES
const addStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)"; // $1, $2, $3, $4 are placeholders for the values in the values array

const checkIfEmailExistsQuery = "SELECT * FROM students s WHERE s.email = $1;"; // $1 is a placeholder for the first value in the values array

// PUT QUERIES
const updateStudentQuery = "UPDATE students SET name = $1 WHERE id = $2;"; // $1, $2 are placeholders for the values in the values array

// DELETE QUERIES
const removeStudentQuery = "DELETE FROM students WHERE id = $1;"; // $1 is a placeholder for the first value in the values array

module.exports = {
  getStudentsQuery,
  getStudentByIdQuery,
  checkIfEmailExistsQuery,
  addStudentQuery,
  removeStudentQuery,
  updateStudentQuery,
};
