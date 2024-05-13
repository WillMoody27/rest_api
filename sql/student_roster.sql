/*
FILEPATH: /Users/williamhellemsmoody/Documents/rest_api/sql/student_roster.sql

This SQL script is used to create a database and table in the PostgresSQL database for managing student information. It also inserts sample data into the table.

Queries:
- DROP DATABASE IF EXISTS students: Drops the 'students' database if it already exists.
- DROP TABLE IF EXISTS students: Drops the 'students' table if it already exists.
- DELETE FROM STUDENTS WHERE id > 0: Deletes all records from the 'students' table where the id is greater than 0.
- CREATE DATABASE students: Creates a new database named 'students'.
- \c students: Connects to the 'students' database.
- CREATE TABLE students: Creates a new table named 'students' with columns for id, name, email, age, and dob.
- INSERT INTO students: Inserts sample data into the 'students' table.

Sample Data:
- Jake Smith: Name: Jake Smith, Email: jsmth@email.com, Age: 25, Date of Birth: 1996-01-01
- Mark Walhberg: Name: Mark Walhberg, Email: markw@email.com, Age: 30, Date of Birth: 1991-01-01
*/
-- Use the following queries to create a database and table in the PostgresSQL database.

DROP DATABASE IF EXISTS students;
DROP TABLE IF EXISTS students;
DELETE FROM STUDENTS WHERE id > 0;

-- CREATE DATABASE STUDENTS
CREATE DATABASE students;

\c students

-- CREATE TABLE STUDENTS
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    dob DATE
);


INSERT INTO students (name, email, age, dob) VALUES
('Jake Smith', 'jsmth@email.com', 25, '1996-01-01'),
('Mark Walhberg', 'markw@email.com', 30, '1991-01-01');

-- Sample Data
INSERT INTO students (name, email, age, dob) VALUES
('Daniel Johnson', 'danielj@email.com', 22, '2002-06-14'),
('Megan Williams', 'meganw@email.com', 25, '1999-09-30'),
('Ryan Taylor', 'ryant@email.com', 21, '2003-03-20'),
('Amanda Davis', 'amandad@email.com', 26, '1998-11-05'),
('Justin Wilson', 'justinw@email.com', 23, '2001-07-12'),
('Hannah Thomas', 'hannaht@email.com', 24, '2000-05-25'),
('Andrew Brown', 'andrewb@email.com', 27, '1997-12-08'),
('Olivia Garcia', 'oliviag@email.com', 20, '2004-01-18'),
('William Rodriguez', 'williamr@email.com', 29, '1995-08-22'),
('Lauren Martinez', 'laurenm@email.com', 22, '2002-04-02'),
('Ethan Hernandez', 'ethanh@email.com', 28, '1996-10-15'),
('Madison Lopez', 'madisonl@email.com', 25, '1999-06-28'),
('Matthew Gonzalez', 'matthewg@email.com', 21, '2003-02-10'),
('Samantha Perez', 'samanthap@email.com', 26, '1998-04-28'),
('Benjamin Flores', 'benjaminf@email.com', 23, '2001-09-07'),
('Emma Lee', 'emmal@email.com', 24, '2000-07-19'),
('Nicholas Scott', 'nicholass@email.com', 27, '1997-11-30'),
('Grace King', 'gracek@email.com', 20, '2004-03-11'),
('Jacob Lewis', 'jacobl@email.com', 29, '1995-05-26'),
('Ava Young', 'avay@email.com', 22, '2002-01-15');
