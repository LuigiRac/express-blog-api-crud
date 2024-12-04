const express = require('express');
const router = express.Router();

const posts = [
    {
        id: 1,
        titolo: "Ciambellone",
        contenuto: "Ciambellone",
        immagine: "/img/ciambellone.jpeg",
        tags: ["Dolce", "Ricetta"]
    },
    {
        id: 2,
        titolo: "Cracker Barbabietola",
        contenuto: "Cracker Barbabietola",
        immagine: "/img/cracker_barbabietola.jpeg",
        tags: ["Cracker", "Ricetta", "Barbabietola"]
    },
    {
        id: 3,
        titolo: "Pane Fritto Dolce",
        contenuto: "Pane Fritto Dolce",
        immagine: "/img/pane_fritto_dolce.jpeg",
        tags: ["Pane", "Ricetta", "Dolce"]
    },
    {
        id: 4,
        titolo: "Pasta Barbabietola",
        contenuto: "Pasta Barbabietola",
        immagine: "/img/pasta_barbabietola.jpeg",
        tags: ["Pasta", "Ricetta", "Barbabietola"]
    },
    {
        id: 5,
        titolo: "Torata Paesana",
        contenuto: "Torta Paesana",
        immagine: "/img/torta_paesana.jpeg",
        tags: ["Torta", "Ricetta", "Dolce"]
    }
];


//READ - INDEX - /posts/
router.get('/', (req, res) => {
    res.json(posts); // restituisce JSON dei posts
});

// READ - SHOW: /posts/1, /posts/2 ...
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => {
        return post.id == id;
    });
    if (post) {
        res.send("Post con id: " + id + " Con titolo: " + post.titolo);
    }

    res.send("Post non trovato");
});

// CREATE - STORE: /posts/
router.post('/', (req, res) => {
    res.send('Creazione nuovo post');
});

// UPDATE - PUT: /posts/1, /posts/2 ...
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => {
        return post.id == id;
    });
    res.send('Modifica integrale dei post ' + req.params.id);

});

// UPDATE - PATCH: /posts/1, /posts/2 ...
router.patch('/:id', (req, res) => {
    res.send('Modifica parziale dei posts ' + req.params.id);
});


// DELETE - DELETE /posts/1
router.delete('/:id', (req, res) => {
    res.send('Eliminazione dei posts ' + req.params.id);
});


//const postsRouter = router;
//module.exports = { postsRouter, posts } // multiple export
module.exports = router;
