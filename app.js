var express = require('express');
var app = express();
var request = require('request');

//To get the body 
app.get("/result" , function( req, res)
{
    var query = req.query.search;   
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb" ;
    request(url , function(error, response, body){
        if(!error && response.statusCode==200)
        {
            var results = JSON.parse(body);
            res.render("home.ejs", {results: results});
        }        
    })
});

//To search for a movie
app.get("/" , function(req, res){
    res.render("search.ejs");

});

//Listening to the request
app.listen(2800 , function(){
    console.log("The system is all setup and ready to go!!!");
})