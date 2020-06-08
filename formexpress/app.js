const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('port', 3000);
// Middlewares /Routing
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true })); // Buscar que hace el body Parser

app.get('/', (req, res) => {
    return res.redirect('/form2-get');
})

app.get('/form-get', (req, res) => {
    return res.render('form-get');
})

app.get('/form2-get', (req, res) => {
    return res.render('form2-get');
})

// POST 
app.get('/form-post', (req, res) => {
    return res.render('form-post');
})

app.get('/form2-post', (req, res) => {
    return res.render('form2-post');
})


//----------Submit Routes
app.get('/submit-form-get', (req, res) => {
    return res.send(req.query.t1)
        //res.send("ANDES");
});

app.post('/submit-form-post', (req, res) => {
    return res.send(req.body)
        //res.send("ANDES");
});

app.listen(app.get('port'), function() {
    console.log("Server running ", app.get('port'))
});