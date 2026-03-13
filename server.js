// Import express
const express = require('express');

// Initialize express app
const app = express();

// Port
const PORT = 5000;

// Middleware to read JSON body
app.use(express.json());


// -----------------------------
// Custom Logger Middleware
// -----------------------------
const logger = (req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`[${req.method}] ${req.url} - ${time}`);
    next();
};

app.use(logger);


// -----------------------------
// Mock Database
// -----------------------------
let blogPosts = [];


// -----------------------------
// Routes
// -----------------------------

// Test Route
app.get('/', (req, res) => {
    res.json({ message: "Server running successfully" });
});


// -----------------------------
// GET ALL POSTS
// -----------------------------
app.get('/posts', (req, res) => {
    res.json(blogPosts);
});


// -----------------------------
// GET SINGLE POST
// -----------------------------
app.get('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
});


// -----------------------------
// CREATE NEW POST
// -----------------------------
app.post('/posts', (req, res) => {

    const newPost = {
        id: blogPosts.length + 1,
        title: req.body.title,
        content: req.body.content
    };

    blogPosts.push(newPost);

    res.json({
        message: "Post added successfully",
        post: newPost
    });

});


// -----------------------------
// UPDATE POST
// -----------------------------
app.put('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    res.json({
        message: "Post updated successfully",
        post: post
    });

});


// -----------------------------
// DELETE POST
// -----------------------------
app.delete('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const index = blogPosts.findIndex(post => post.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Post not found" });
    }

    blogPosts.splice(index, 1);

    res.json({
        message: "Post deleted successfully"
    });

});


// -----------------------------
// FAKE LOGIN ROUTE
// -----------------------------
app.post('/login', (req, res) => {

    const { username, password } = req.body;

    if (username && password) {

        return res.json({
            message: "Login successful",
            token: "fake-jwt-token-123456"
        });

    }

    res.status(400).json({
        message: "Invalid username or password"
    });

});


// -----------------------------
// START SERVER
// -----------------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});