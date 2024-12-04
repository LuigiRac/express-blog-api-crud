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

// DELETE - DELETE /posts/1
function destroy(req, res) {
    res.send('Eliminazione dei posts ' + req.params.id);
}

module.exports = { index, show, destroy }