# Scalable REST API with Authentication & Role-Based Access

## Project Overview

This project is a full-stack application built with **Node.js, Express.js, PostgreSQL, Sequelize ORM, JWT Authentication, and React.js**. It demonstrates a scalable REST API architecture with role-based access control (RBAC), secure authentication, CRUD operations, API documentation, validation, error handling, and a React frontend for testing APIs.

---

## Features

### Backend

* User Registration & Login
* Password Hashing using bcrypt
* JWT Authentication
* Role-Based Access Control (USER / ADMIN)
* CRUD APIs for Tasks
* Sequelize ORM with PostgreSQL
* Input Validation using express-validator
* Global Error Handling
* API Versioning (`/api/v1`)
* Pagination & Filtering
* Swagger API Documentation
* Secure Middleware (Helmet, CORS)
* Modular & Scalable Folder Structure

### Frontend

* User Registration Page
* User Login Page
* JWT-Based Authentication
* Protected Dashboard
* Create Tasks
* View Tasks
* Delete Tasks (Admin)
* Axios API Integration
* Route Protection

---

# Tech Stack

## Backend

* Node.js
* Express.js
* PostgreSQL
* Sequelize ORM
* JWT
* bcryptjs
* express-validator
* Swagger
* Helmet
* Morgan

## Frontend

* React.js
* Vite
* Axios
* React Router DOM

---

# Project Structure

```text
scalable-rest-api/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── validators/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# Database Schema

## Users Table

| Column    | Type         |
| --------- | ------------ |
| id        | Integer      |
| name      | String       |
| email     | String       |
| password  | String       |
| role      | USER / ADMIN |
| createdAt | Timestamp    |

## Tasks Table

| Column      | Type                              |
| ----------- | --------------------------------- |
| id          | Integer                           |
| title       | String                            |
| description | Text                              |
| status      | PENDING / IN_PROGRESS / COMPLETED |
| userId      | Integer                           |
| createdAt   | Timestamp                         |

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd scalable-rest-api
```

---

# Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000

DB_NAME=scalabledb
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost

JWT_SECRET=mysecretkey123
```

Create PostgreSQL database:

```sql
CREATE DATABASE scalabledb;
```

Run backend:

```bash
npm run dev
```

Backend will start at:

```text
http://localhost:5000
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend will start at:

```text
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/v1/auth/register
```

Request:

```json
{
  "name": "Aditya",
  "email": "aditya@gmail.com",
  "password": "123456"
}
```

---

### Login User

```http
POST /api/v1/auth/login
```

Request:

```json
{
  "email": "aditya@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "jwt-token"
}
```

---

## User APIs

### Get Profile

```http
GET /api/v1/users/profile
```

Headers:

```http
Authorization: Bearer <token>
```

---

## Admin APIs

### Admin Dashboard

```http
GET /api/v1/admin/dashboard
```

Headers:

```http
Authorization: Bearer <token>
```

---

## Task APIs

### Create Task

```http
POST /api/v1/tasks
```

### Get All Tasks

```http
GET /api/v1/tasks
```

### Get Task By ID

```http
GET /api/v1/tasks/:id
```

### Update Task

```http
PUT /api/v1/tasks/:id
```

### Delete Task

```http
DELETE /api/v1/tasks/:id
```

---

# Authentication Flow

```text
Register User
      ↓
Login User
      ↓
Generate JWT
      ↓
Store JWT
      ↓
Send JWT in Authorization Header
      ↓
Access Protected APIs
```

---

# Role-Based Access Control

## USER

* Create Own Tasks
* View Own Tasks
* Update Own Tasks

## ADMIN

* View All Tasks
* Delete Any Task
* Access Admin Dashboard

---

# API Documentation

Swagger UI:

```text
http://localhost:5000/api-docs
```

Swagger provides:

* Request Schemas
* Response Schemas
* Authentication Testing
* Endpoint Documentation

---

# Pagination Example

```http
GET /api/v1/tasks?page=1&limit=10
```

---

# Filtering Example

```http
GET /api/v1/tasks?status=COMPLETED
```

---

# Security Features

* Password Hashing (bcrypt)
* JWT Authentication
* Protected Routes
* Role-Based Authorization
* Input Validation
* Error Handling
* Helmet Security Headers
* CORS Configuration

---

# Scalability Considerations

### API Versioning

```text
/api/v1/*
```

Future versions:

```text
/api/v2/*
```

### Horizontal Scaling

```text
Load Balancer
       ↓
Multiple Backend Instances
       ↓
Shared PostgreSQL Database
```

### Redis Caching (Future Enhancement)

```text
Client
  ↓
Redis Cache
  ↓
Database
```

### Microservices Migration

Future service separation:

* Authentication Service
* User Service
* Task Service
* Notification Service

---

# Future Improvements

* Refresh Tokens
* Redis Caching
* Docker Deployment
* CI/CD Pipeline
* Unit Testing (Jest)
* Integration Testing (Supertest)
* Email Verification
* Password Reset
* Audit Logging
* File Upload Support

---

# Author

Aditya Gupta

Software Developer | Java | Spring Boot | React | Node.js | PostgreSQL

---

# License

This project is created for educational and assessment purposes.
