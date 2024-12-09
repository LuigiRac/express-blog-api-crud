const posts = require('../models/posts.js');

//READ - INDEX - /posts/
function index(req, res) {
    errore500.get(); // Errore esecuzione server
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
    // console.log(req.body);
    // const newId = posts[posts.length - 1].id + 1;

    /* Ciclo For forma più corretta*/
    let newId = 0;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id > newId) {
            newId = posts[i].id;
        }
    }
    newId += 1;

    const newPost = {
        id: newId,
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags
    }
    posts.push(newPost)
    // res.send('Creazione nuovo post');
    // res.status(201);
    // res.json(newPosts);
    res.status(201).json(newPost)
}

// UPDATE - PUT: /posts/1, /posts/2 ...
function update(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => {
        return post.id == id;
    });
    if (!post) {
        res.status(404).json({
            error: "404",
            message: "Post non trovato",
        });
        return;
    }
    console.log(req.body);

    post.titolo = req.body.titolo;
    post.contenuto = req.body.contenuto;
    post.immagine = req.body.immagine;
    post.tags = req.body.tags;

    // console.log(posts);

    // res.send('Modifica integrale dei post ' + req.params.id);
    res.json(post);
};

// DELETE - DELETE /posts/1
function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.findIndex((post) => {
        return post.id === id;
    });
    if (post !== -1) {
        posts.splice(posts, 1);
        res.sendStatus(204);
    } else {
        res.status(404);
        res.json({
            error: "404",
            message: "Post non trovato",
        });
    }
}


module.exports = { index, show, store, update, destroy };