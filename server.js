// Dependencies for project
const express = require('express'); // Invoking the requiring of express
const app = express(); // Declaring the usage of express
const port = 3000; // Setting a port number to a var

// Middleware required for the use of several methods and features

// Mongoose connection for access to mongoDB

// Controller Routes for RESTful routes
const characterSheetController = require('./controllers/characterSheet.js');
app.use('/DNDCS', characterSheetController); // any instance of /DNDCS will cause it to looking within that folder location for routes


// Listener
app.listen(port, () => {
    console.log('Listening on port: ', port);
});
