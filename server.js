const express = require('express');
const app = express();

app.use(express.static('frontend'));

app.get('/', function(req, res){
    res.send("Welcome to Vansh's Site");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Server started at http://localhost:"+PORT);
})
