const posts = require('../models/posts.js');

//READ - INDEX - /posts/
function index(req, res) {
    res.json(posts); // restituisce JSON dei posts
}

// READ - SHOW: /posts/1, /posts/2 ...
function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => {
        return post.id == id;
    });
    if (post) {
        res.send("Post con id: " + id + " Con titolo: " + post.titolo);
    }

    res.send("Post non trovato");
}

// CREATE - STORE: /posts/
function store(req, res) {
    console.log(req.body);
    // console.log(req.headers['content-type']);

    res.send('Creazione nuovo post');
}

// DELETE - DELETE /posts/1
function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.findIndex((post) => {
        return post.id === id;
    });
    if (post !== -1) {
        posts.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404);
        res.json({
            error: "404",
            message: "Post non trovato",
        });
    }
}


module.exports = { index, show, store, destroy };