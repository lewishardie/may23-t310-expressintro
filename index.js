console.log("hey everyone, server wip...")
//import the server package
const express = require('express');

// make an instance of the server that we can customise and run
const app = express();


const PORT = process.env.PORT || 3000;
//ports run in integers  between 1001 - 65536

// write the routes
//Get localhost:3000/
// app.get(route path, callback fucntion to handle request and response)
app.get('/', (request, response) => {
    response.send("hellow world, server building in progress...")
})

// Configure the server

// Activate the server
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});