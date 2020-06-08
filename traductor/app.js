const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
    version: '2018-05-01',
    authenticator: new IamAuthenticator({
        apikey: 'OZ9Ke8U2pmq-L-kV_boCnGTHhfjwyKdm--qdk58PvcHR',
    }),
    url: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/a9eebf92-dc6c-4e54-83c4-4f2e994ace1e',
});

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.set('port', 3002);

// Middle ware Engine VIEWS

app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); // Buscar que hace el body Parser

//Static files
//Llamar archivos fuentes csss entre otros
app.use(express.static(path.join(__dirname, 'public')))


app.get('/form', (req, res) => {
    return res.render('form.html', {
        title: 'Traductor entrada'
    });
});


app.post('/sub-form', (req, res) => {

    console.log(req.body);
    model_t = req.body.opc.split('-');
    model_t[1];
    var opcT = { target: model_t[1], model_id: req.body.opc }

    var parameters = {
        text: req.body.t1,
        // text: 'Hola mis amigos, esta es una prueba de traducción utilizando un API de IBM',
        model_id: req.body.opc,
        target: model_t[1]
    };

    languageTranslator
        .translate(parameters)
        //     .then(({ result }) => res.json(result))
        .then(({ result }) =>
            res.render('sub-form.html', {
                title: 'Traductor-Resultado',
                msg: result.translations[0].translation,
                opcT: opcT
            }))
        .catch(error => next(error));



});

/*
var parameters = {
    text: 'Hello my friends. Specify a language code to filter results by target language',
    // text: 'Hola mis amigos, esta es una prueba de traducción utilizando un API de IBM',
    model_id: 'en-es',
    target: 'es'
};


languageTranslator.translate(
    parameters,
    function(error, res) {
        if (error) {
            console.log(error);
        } else {
            console.log(JSON.stringify(res, null, 2));
        }
    }); 
    */

app.listen(app.get('port'), () => {
    console.log("Server Running ", app.get('port'))
});