const express = require('express')
const app = express();
const morgan = require('morgan');
// SETTINGS
app.set('appName', 'Express tutorial')
app.set('port', 5001)
app.set('view engine', 'ejs')

//MIDDLEWARE
//  para validar (RUTAS,DATOS) antes de llegar a una ruta 

app.use(express.json());
app.use(morgan('tiny'));


//RUTAS

app.get('/', (req, res) => {
    const data = [{ name: 'Andes' }, { name: 'EMPORIO' }, { name: 'DJ ANDES' }, { name: 'Undersun' }, { name: 'Amg' }, { name: 'Trance Motion' }]
    res.render('index.ejs', { people: data });
});
app.get('/user', (req, res) => {
    /*
      res.json({
          username: "ANDES",
          lastmane: "Montealegre",
          age: 34
      })
      */
    res.send("Petición POST");

});
app.post('/user/:userid', (req, res) => {
    console.log(req.params.userid)
    console.log(req.body);
    res.send("Petición POST");
});

app.put('/user/:userid', (req, res) => {
    res.send(`The user ${req.params.userid} was updated!!`)
    console.log(req.body);
});

app.delete('/user/:userid', (req, res) => {
    res.send(` The user ${req.params.userid} was deleted `)
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log("server o port ", app.get('port'));
    console.log(app.get('appName'))
});