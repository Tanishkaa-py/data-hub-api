# Learning Prompts Used During This Project

This document lists prompts and questions used while learning and building the Data Hub API project.

---

## Understanding Node.js

Prompt:
What is Node.js and how does it allow JavaScript to run outside the browser?

Purpose:
To understand how backend servers can be built using JavaScript.

---

## Understanding Express

Prompt:
What is Express in Node.js and why is it used for building APIs?

Purpose:
To learn how Express simplifies routing and server creation.

---

## Creating a Basic Server

Prompt:
How do I create a basic Express server listening on port 5000?

Purpose:
To set up the initial backend server.

---

## Understanding REST APIs

Prompt:
What are REST APIs and what are the common HTTP methods used in them?

Purpose:
To understand GET, POST, PUT, and DELETE methods.

---

## Creating CRUD Routes

Prompt:
How do I create REST API routes for blog posts using Express?

Purpose:
To implement CRUD functionality.

Routes created:

GET /posts  
GET /posts/:id  
POST /posts  
PUT /posts/:id  
DELETE /posts/:id  

---

## Understanding req.body

Prompt:
Why does req.body return undefined in Express and how can it be fixed?

Purpose:
To learn about JSON parsing middleware.

Solution:
Use the middleware:

app.use(express.json());

---

## Creating a Mock Database

Prompt:
How can I simulate a database using a JavaScript array?

Purpose:
To temporarily store blog posts without using a real database.

---

## Testing APIs

Prompt:
How can I test API endpoints using Postman?

Purpose:
To simulate frontend requests and verify server responses.

---

## Custom Middleware

Prompt:
How do I create middleware in Express that logs request details?

Purpose:
To understand the middleware pipeline in Express.

---

## Fake Authentication

Prompt:
How can I create a simple login route that returns a mock JWT token?

Purpose:
To simulate authentication without implementing a full auth system.

---

## GitHub Deployment

Prompt:
How do I upload a Node.js project to GitHub and exclude node_modules using .gitignore?

Purpose:
To learn version control and project hosting.

---

## Outcome

By completing this project, I learned:

- How backend APIs work
- How to build servers with Node.js and Express
- How to implement CRUD operations
- How to test APIs using Postman
- How to use Git and GitHub for version control
