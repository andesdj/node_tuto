const express = require('express');
const router = express.Router();

// Rutas
router.get('/', (req, res)=>{
    res.render('index.html', 
    {
        title:'Andres AMG' 
    }
    );
});

router.get('/contact', (req, res)=>{
    res.render('contact.html', 
    {
        title:'Contact AMG' 
    }
    );
});

router.get('/about', (req, res)=>{
    res.render('contact.html', 
    {
        title:'About AMG' 
    }
    );
});
//--------------------------------------------------- 
module.exports=router;

// Aprendizaje
//res.send("<h1>HELLO WORLD</h1>");

//console.log(path.join(__dirname,'views/index.html'));
// res.sendFile(path.join(__dirname,'views/index.html'));