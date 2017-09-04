let Article = require("../Models/Article");

module.exports = function(app) {

    app.post("/api/save", (req, res) => {

        let newArticle = new Article({
            title: req.body.abstract,
            url: req.body.web_url,
            date: req.body.pub_date
        });

        newArticle.save().then((err, result) => {
            if (err) res.send(err);
            
            console.log("a new article was saved");
            res.send(result);
        }).catch((err) => {
            res.send(err);
        })

    });
}