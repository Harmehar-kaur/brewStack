// git remote add origin https://github.com/Harmehar-kaur/brewStack.git
// git branch -M main
// git push -u origin main

// requiring the express lib
const express = require('express');
const app = express(); //server set up and routing 
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs'); //easy rendering 
app.set('views', './views');

app.use('/', require('./routes'));


app.listen(port, function(err){ //code functional or not
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});