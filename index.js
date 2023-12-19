console.log("hey everyone, server wip...")
//import the server package
const express = require('express');

// make an instance of the server that we can customise and run
const app = express();

// write the routes
//Get localhost:3000/
// app.get(route path, callback fucntion to handle request and response)
app.get('/', (request, response) => {
    response.send("hellow world, server building in progress...")
})
// Configure the server

// Activate the server
app.listen(() => {
    console.log("Server is running on port 3000");
})