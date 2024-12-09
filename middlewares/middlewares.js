// in questa sezione dobbiamo creare la funzione ed esportarla, bisogna importarla tramite "require" su server.js. Sempre su server.js bisogna registrare il middleware con app.use(....).

function checkTime(req, res, next) {
    const currentTime = new Date().toLocaleString();
    console.log("Sei passato dal middleware alle");
    console.log(currentTime);

    if (currentTime.includes('10:')) {
        res.status(503).send('Servizio non disponibile');
        return;
    }
    next();

}

module.exports = checkTime;