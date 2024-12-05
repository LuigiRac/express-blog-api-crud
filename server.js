/*
 *Milestone 1*
Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.
All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.
Se tutto funziona, passiamo alla prossima milestone


*Milestone 2*
Per iniziare, creiamo una cartella data o models  in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato.  Importiamo questo file in cima al controller.
Ora passiamo ad implementare le logiche delle nostre CRUD:
- Index dovrà restituire la lista dei post in formato JSON
- Show dovrà restituire un singolo post in formato JSON
- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
 */

const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());
app.use(express.static("public"));

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


// url: tutte quelle che non corrispondono a niente di definito prima
app.get('*', (req, res) => {
    res.status(404).send('404 page')
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
