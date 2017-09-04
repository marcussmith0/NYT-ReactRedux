
module.exports = function(app) {

    app.post("/api/save", (req, res) => {

        return console.log(req.body);
    });
}