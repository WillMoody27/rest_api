# Student Roster API

CREATE BY: [William Hellems Moody](https://www.willhmoody.com) | [GitHub](https://www.github.com/willmoody27) | [LinkedIn](www.linkedin.com/in/williamhellemsmoody)

API Documentation On Postman: [Students Roster API](https://documenter.getpostman.com/view/34867215/2sA3JNafWv)

This is an API that allows you to perform CRUD operations on a student roster. The API is built using Node.js, Express, and PostgresSQL. Docker is used to create a container for the PostgresSQL database and the API is hosted on a local server. The goal of the project is to demonstrate how to create a RESTful API using Node.js and PostgresSQL, and how to use Docker to create a container for the database to create a scalable microservice architecture.

## Table of Contents

- [Introduction](#introduction)
- [Installation | Setup](#installation--setup)

  - [Node.js Setup](#nodejs-setup)
  - [Express](#express)
  - [Nodemon](#nodemon)
  - [PostgresSQL](#postgressql)
  - [Dotenv](#dotenv)

- [Docker Container Setup](#docker-container-setup)

  - [Path to Docker Folder](#path-to-docker-folder)
  - [Running Postgres Container](#running-postgres-container)
  - [Starting the PSQL Session](#starting-the-psql-session)

- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)

- [API Endpoints](#api-endpoints)
  - [GET /students](#get-students)
  - [GET /students/:id](#get-studentsid)
  - [POST /students](#post-students)
  - [PUT /students/:id](#put-studentsid)
  - [DELETE /students/:id](#delete-studentsid)

---

## Installation | Setup

### Node.js Setup

The following command will create a `package.json` file in the root directory, that will be used to install the required dependencies.

```bash
npm init -y
```

### Express

The following express package is required to create the server. It will also be used to handle the routes and requests when communicating with the database.

```bash
npm install express
```

### Nodemon

Nodemon is a utility package that will monitor for any changes in the source code and automatically restart the server.

```bash
npm install nodemon
```

### PostgresSQL

The following package is required to connect to the PostgresSQL database, for performing CRUD operations.

```bash
npm install pg
```

### Dotenv

The following package is required to load environment variables from a `.env` file into `process.env`.

```bash
npm install dotenv
```

## Docker Container Setup

Create a (local) folder to store the Postgres data files. For example, I created a folder called `postgres` in my documents folder. The absolute path to the folder is:

### Path to Docker Folder

```
/Users/williamhellemsmoody/Documents/docker_d
```

### Running Postgres Container

Download the postgres (standard) docker image from Docker hub using:

```
docker pull postgres
```

Then start your postgres container from the image that you downloaded using:

```
docker run --rm --name postgres --publish 5432:5432 -e POSTGRES_PASSWORD=<PG_PASS> -v /Users/<USER_DIR>/Documents/docker_db:/var/lib/postgresql/data postgres
```

The command above will start postgres using **1234** as the password for the postgres (default) user. Note the use of -e parameter (useful to set environment variables) for your container. The environment variables that need to be set are container-dependent. Please note that the **-v** parameter which allows mapping the container's postgres storage to a localq folder of your choice. Of course, you need to replace the absolute path to match your own environment. If postgres successfully started, the following log message will appear:

```sql
LOG: database system is ready to accept connections
```

### Starting the PSQL Session

On another terminal window, use **docker exec** to start **psql** session to connect with the DBMS.

```sql
docker exec -it postgres psql -U postgres
```

- If the command above is successful, you should be able to see **psql** prompt:

```sql
psql (16.2 (Debian 16.2-1.pgdg120+2))
Type "help" for help.

postgres=#
```

## Database Setup

Use the following queries to create a database and table in the PostgresSQL database.

```sql
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

-- INSERT INTO STUDENTS (2 ROWS)
INSERT INTO students (name, email, age, dob) VALUES
('Jake Smith', 'jsmth@email.com', 25, '1996-01-01'),
('Mark Walhberg', 'markw@email.com', 30, '1991-01-01');
```

## Environment Variables

Once you have created the database and table, you can start the server and test the API. Before starting the server, make sure to create a `.env` file in the root directory and add the following environment variables.

```bash
DB_USER=<USERNAME>
DB_PASS=<PASSWORD>
DB_HOST=localhost
DB_PORT=<PORT>
DB_NAME=<DATABASE_NAME>
```

## Running the Server

To start the server on the desired **PORT** set, run the following command:

```bash
npm nodemon server.js
```

## API Endpoints

The following are the API endpoints that can be used to perform CRUD operations on the students roster.

### GET /students

This endpoint will return all the students in the database.

### GET /students/:id

This endpoint will return a student with the specified ID.

### POST /students

This endpoint will add a new student to the database.

### PUT /students/:id

This endpoint will update a student with the specified ID.

### DELETE /students/:id

This endpoint will delete a student with the specified ID.

## Testing the API

# Official Student Roster API Documentation Link: [Students Roster API](https://documenter.getpostman.com/view/34867215/2sA3JNafWv)

You can use POSTMAN to test the API endpoints. The following is a sample request that can be used to add a new student to the database.

### GET students_by_id

#### Endpoint

```
http://localhost:3000/api/v1/students/
```

This endpoint sends an HTTP GET request to retrieve a list of students. The response is a JSON schema with the following structure:

```json
[
  {
    "id": "number",
    "name": "string",
    "email": "string",
    "age": "number",
    "dob": "string"
  }
]
```

#### Example Request:

```curl
curl --location 'http://localhost:3000/api/v1/students/'
```

```json
[
  {
    "id": 1,
    "name": "Jake Smalls",
    "email": "jsmth@email.com",
    "age": 25,
    "dob": "1996-01-01T07:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Mark Wahl",
    "email": "markw@email.com",
    "age": 30,
    "dob": "1991-01-01T07:00:00.000Z"
  }
]
```

---

### POST create_new_student

#### Endpoint

```
http://localhost:3000/api/v1/students/
```

The POST request is used to create a new student record in the API. The request should include the student's name, email, age, and date of birth.

#### Request Body

- name (string, required): The name of the student.
- email (string, required): The email address of the student.
- age (number, required): The age of the student.
- dob (string, required): The date of birth of the student.

#### Response

The response for this request follows the JSON schema below:

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "age": {
      "type": "number"
    },
    "dob": {
      "type": "string"
    }
  },
  "required": ["name", "email", "age", "dob"]
}
```

#### Body Raw (json)

```json
{
  "name": "Mary Owens",
  "email": "mows@email.com",
  "age": 45,
  "dob": "1979-05-01"
}
```

#### Example Request:

```curl
curl --location 'http://localhost:3000/api/v1/students/' \
--data-raw '{
    "name": "Mary Owens",
    "email": "mows@email.com",
    "age": 45,
    "dob": "1979-05-01"
}'
```

```json
{
  "name": "Mary Owens",
  "email": "mows@email.com",
  "age": 45,
  "dob": "1979-05-01"
}
```

---

### DELETE delete_student

#### Endpoint

```
http://localhost:3000/api/v1/students/12
```

The endpoint sends an HTTP DELETE request to delete the student with the ID 12.

#### Response

The response for this request follows the JSON schema below:

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  }
}
```

#### Example Request:

```curl
curl --location --request DELETE 'http://localhost:3000/api/v1/students/12'
```

#### Example Response

```json
{
  "message": "Student deleted with ID: 12"
}
```

---

### PUT update_student

#### Endpoint

```
http://localhost:3000/api/v1/students/2
```

Update Student Details

- This endpoint is used to update the details of a specific student.

Request

- Method: PUT
- URL: http://localhost:3000/api/v1/students/2
- Body (raw, application/json):

```json
{
  "name": ""
}
```

#### Response

The response for this request follows the JSON schema below:

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    }
  }
}
```

#### Body Raw (json)

```json
{
  "name": "Mark Wahl"
}
```

#### Example Request:

```curl
curl --location --request PUT 'http://localhost:3000/api/v1/students/2' \
--data '{
    "name": "Mark Wahl"
}'
```

#### Example Response

```json
{
  "name": "Mark Wahl"
}
```

For Complete API Documentation, please visit the following link: [Students Roster API](https://documenter.getpostman.com/view/34867215/2sA3JNafWv) | Created By - William Hellems Moody

Contributors: [William Hellems Moody](https://www.willhmoody.com) | [GitHub](https://www.github.com/willmoody27) | [LinkedIn](www.linkedin.com/in/williamhellemsmoody)
