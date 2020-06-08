console.log("A M G");
const express = require('express');
const path = require('path');
const app= express();

//Settings on port
app.set('port',3000);
app.set('views', path.join(__dirname,'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

//Middleware
//Validar informacion antes de que haga el ejercicio

//Routes
app.use(require('./routes/index'));


//Static files
//Llamar archivos fuentes csss entre otros
app.use(express.static(path.join(__dirname,'public')))

//Listening
app.listen(app.get('port'), ()=> {
    console.log('Andes Server OK on port:',app.get('port'))
});
