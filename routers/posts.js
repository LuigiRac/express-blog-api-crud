const express = require('express');
const router = express.Router();

// const controllers = require('../controllers/postControllers');
const { index, show, destroy } = require('../controllers/postControllers');



//READ - INDEX - /posts/
router.get('/', index);


// READ - SHOW: /posts/1, /posts/2 ...
router.get('/:id', show);

// CREATE - STORE: /posts/
// router.post('/', (req, res) => {
//     res.send('Creazione nuovo post');
// });

// UPDATE - PUT: /posts/1, /posts/2 ...
// router.put('/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => {
//         return post.id == id;
//     });
//     res.send('Modifica integrale dei post ' + req.params.id);

// });

// UPDATE - PATCH: /posts/1, /posts/2 ...
// router.patch('/:id', (req, res) => {
//     res.send('Modifica parziale dei posts ' + req.params.id);
// });


// DELETE - DESTROY /posts/1
router.delete('/:id', destroy);

//const postsRouter = router;
//module.exports = { postsRouter, posts } // multiple export
module.exports = router;
