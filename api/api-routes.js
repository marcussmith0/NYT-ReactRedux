let Article = require("../Models/Article");

module.exports = function(app) {

    app.post("/api/save", (req, res) => {

        let newArticle = new Article({
            title: req.body.abstract,
            url: req.body.web_url,
            date: req.body.pub_date
        });

        newArticle.save().then(result => {
            if (!result) res.status(400).send();
            
            console.log("a new article was saved");
            res.send(result);
            
        }).catch(err => res.send(err));

    });

    app.get('/api/saved', (req, res) => {
        
        Article.find({}).then(articles => {
            if (!articles) return res.status(404).send();

            res.send(articles);
            
        }).catch(err => res.send(err));
    });

    app.delete("/api/delete/:id", (req, res) => {
        let id = req.params.id

        console.log("this is the id", id);

        Article.findByIdAndRemove(id).then(result => {
            if (!result) return res.status(404).send();

            res.send(result);
            
        }).catch(err => res.send(err));
    });
}
