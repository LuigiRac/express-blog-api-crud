const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

const cors = require("cors");
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use(express.static("public"));



// require middlewares
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');

// Rotte Api
const postsRouter = require('./routers/posts')
// console.log(postsRouter);


// url: /
app.get('/', (req, res) => {
    res.send('Home page')
});


// Aggiungo Middleware con le rotte di /posts
// /routers/posts - /routers/posts/3
// /posts - /posts/3
app.use('/posts', postsRouter);




// url: tutte quelle che non corrispondono a niente di definito prima (fallback)
// app.get('*', (req, res) => {
//     res.status(404).send('404 page')
// });

//Middleware di errore
app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
