# Data Hub API

A beginner-friendly REST API built using **Node.js** and **Express.js** that allows users to perform CRUD operations on blog posts.

This project was created as part of a full-stack learning assignment to understand how backend APIs work and how they are tested using Postman.

---

# Project Overview

The Data Hub API is a backend server that listens for HTTP requests and responds with JSON data. It simulates a small blogging system where posts can be created, viewed, updated, and deleted.

The server runs locally and is tested using Postman.

---

# Technologies Used

- Node.js
- Express.js
- Postman
- Git & GitHub

---

# Project Structure
data-hub-api

- server.js
- package.json
- package-lock.json
- node_modules


---

# Installation

Clone the repository:
git clone https://github.com/Tanishkaa-py/data-hub-api.git


Navigate to the project folder:


cd data-hub-api


Install dependencies:


npm install


Run the server:


node server.js


Server will start at:


http://localhost:5000


---

# API Endpoints

## Get All Posts


GET /posts


Returns all blog posts.

---

## Get Single Post


GET /posts/:id


Returns a specific blog post by ID.

---

## Create Post


POST /posts


Example request body:


{
"title": "My First Blog",
"content": "Learning Node.js APIs"
}


---

## Update Post


PUT /posts/:id


Updates an existing post.

---

## Delete Post


DELETE /posts/:id


Deletes a post by ID.

---

## Login Route (Mock Authentication)


POST /login


Example request body:


{
"username": "admin",
"password": "1234"
}


Returns a mock JWT token.

---

# Middleware

This API includes a custom middleware that logs:

- HTTP method
- Request URL
- Timestamp

Example log output:


[POST] /posts - 12:10 PM
[GET] /posts - 12:11 PM
[DELETE] /posts/1 - 12:12 PM


---

# API Testing

The API was tested using Postman.

Tested operations include:

- Creating blog posts
- Retrieving blog posts
- Updating blog posts
- Deleting blog posts
- Logging in via a mock authentication route

---

# Learning Prompts Used

These are example prompts used to understand and build the project.

### Understanding Node.js

What is Node.js and how does it allow JavaScript to run outside the browser?

---

### Understanding Express

What is Express in Node.js and how does it help create APIs?

---

### Creating an Express Server

How do I create a basic Express server that listens on port 5000?

---

### REST APIs

What are REST APIs and what are the main HTTP methods used in them?

---

### CRUD Operations

How do I create REST API routes for:

GET /posts  
GET /posts/:id  
POST /posts  
PUT /posts/:id  
DELETE /posts/:id  

---

### Handling JSON Requests

Why does `req.body` return undefined and how can it be fixed?

Solution: Use


app.use(express.json())


---

### Mock Database

How can a JavaScript array be used as a temporary database?

---

### Middleware

How do I create custom middleware in Express to log request information?

---

### Authentication

How can I create a simple login route that returns a fake JWT token?

---

### API Testing

How can I test REST APIs using Postman?

---

# What I Learned

By building this project I learned:

- How backend servers work
- How REST APIs are designed
- How to implement CRUD operations
- How middleware works in Express
- How to test APIs using Postman
- How to upload projects to GitHub

---

# Future Improvements

Possible improvements for this project include:

- Connecting to a real database such as MongoDB
- Implementing real JWT authentication
- Adding request validation
- Deploying the API to a cloud platform

---

# Author

Tanishka
