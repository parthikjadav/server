const express = require('express');
const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

app.get("/", function(req, res){
    res.send("Welcome to the API!");
})

app.listen(3000,()=>{
    
})