# Student Management API 🚀🤖

A minimal Express + MongoDB REST API for managing students. Built with Node.js, Express, and Mongoose. ✨

## Table of Contents
- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Install](#install)
  - [Environment](#environment)
  - [Run](#run)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Links & Symbols](#links--symbols)
- [Contact](#contact) 📫

## About
Small demo API to create, read, update, and delete students. Perfect for learning Express + MongoDB. 📚

## Features
- RESTful routes for students (CRUD)
- Mongoose schema with validation and unique email
- DB connection helper

## Getting Started

### Requirements
- Node.js
- npm
- MongoDB Atlas connection string

### Install
```sh
npm install
```

### Environment
Create a `.env` file (see [.env](.env)) with:
- `MONGODB_URI` — MongoDB connection string
- `PORT` — port to run the server (default 5000)

Example (replace with your values):
```
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.../dbname
PORT=5000
```

### Run
Start the server:
```sh
npm run dev     # runs node server.js
# or
npm start       # runs nodemon server.js
```

The app entry point is [server.js](server.js). The DB connect helper is [`connectDB`](config/db.js).

## API Endpoints
Base path: /api/students (see [routes/studentRoutes.js](routes/studentRoutes.js))

- GET /api/students — list all students
- POST /api/students — create a student
  - body: { name, age, grade, email }
- PUT /api/students/:id — update student
- DELETE /api/students/:id — delete student

Model: [`Student`](models/student.js) — schema fields: `name`, `age`, `grade`, `email`.

## Project Structure
- [.env](.env)
- [.gitignore](.gitignore)
- [package.json](package.json)
- [server.js](server.js)
- [config/db.js](config/db.js) — contains [`connectDB`](config/db.js)
- [models/student.js](models/student.js) — exports [`Student`](models/student.js)
- [routes/studentRoutes.js](routes/studentRoutes.js) — router for student endpoints (`/api/students`)

## Links & Symbols
- [`connectDB`](config/db.js) — DB connection helper in [config/db.js](config/db.js)
- [`Student`](models/student.js) — Mongoose model in [models/student.js](models/student.js)
- [`studentRoutes`](routes/studentRoutes.js) — routes in [routes/studentRoutes.js](routes/studentRoutes.js)
- [server.js](server.js)
- [package.json](package.json)
- [.env](.env)
- [.gitignore](.gitignore)

## Contact
LinkedIn: https://www.linkedin.com/in/tito-mwenda 🤝

Happy coding! ✨🤖