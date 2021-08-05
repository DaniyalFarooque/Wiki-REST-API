//eslint version6 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose =  require("mongoose");

const app = express(); 

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser:true, useUnifiedTopology: true});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

//chain method similar to jquery 
//app.route.get().post().delete();
app.route("/articles")
.get(function(req, res){
    Article.find(function(err, foundArticles){
        if(!err)
            res.send(foundArticles);
        else 
            res.send(err);
    });
})
.post(function(req,res){
    console.log(req.body.title);
    console.log(req.body.content);
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save(function(err){
        if(err)
            res.send(err);
        else
            res.send("Successfully added a new article.");
    });
})
.delete(function(req,res){
    Article.deleteMany(function(err){
        if(err)
            res.send(err);
        else
            res.send("Successfully deleted all articles.");
    });
});

// using route parameters that is semicolon and key
//%20 is space in urlencoded
app.route("/articles/:title")
.get(function(req,res){
    // console.log(req.params.title);
    Article.findOne({title:req.params.title}, function(err,foundArticle){
        if(err)
            res.send(err);
        else if(foundArticle)
            res.send(foundArticle);
        else
            res.send("No articles matching that title was found.")
    });
})
.put(function(req,res){
    Article.update(
        {title:req.params.title},
        {title:req.body.title, content:req.body.content},
        {overwrite:true},
        function(err,results){
            if(err)
                res.send(err);
            else
                res.send("Successfully updated the article.");

        }
    );
})
.patch(function(req,res){
    req.body
    Article.update(
        {title:req.params.title},
        {$set: req.body},
        function(err){
            if(err)
                res.send(err);
            else
                res.send("Successfully updated the article.");
        }
    );
})
.delete(function(req,res){
    Article.deleteOne(
        {title:req.params.title}, 
        function(err){
            if(err){
                res.send(err);
            }else{
                res.send("Successfully deleted  articles.");
            }
        }
    );
});


app.listen(3000,function(){
    console.log("Server started on port 3000");
});