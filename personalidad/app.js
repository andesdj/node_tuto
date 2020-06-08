// 1 Configurar Middleware Express, path
// Configurar  WATSON
const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const personalityInsights = new PersonalityInsightsV3({
  version: '2017-10-13',
  authenticator: new IamAuthenticator({
    apikey: 'UcdbijSBI1UTj0HOjNlLjmgbS4dYHnLL8VPTSEKRgNL1',
  }),
  url: 'https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/982d8333-69b8-4fc2-891f-833e24dd4215',
  disableSslVerification: true,
});
var prof={
    "contentItems": [
    {
        "content":"es una referencia a un período intensamente difícil en mi vida a principios de 2016. Durante varias semanas después del accidente, me resignaron a una cama de hospital, sin saber si alguna vez volvería a caminar, y mucho menos a hacer música. Aunque estaba contento de estar vivo, inicialmente me molestó mi desgracia y sentí una sensación de frustración e ira. Pero pronto comencé a darme cuenta de que no sólo estaba vivo, sino que estaba rodeado de seres queridos que estarían conmigo a cada paso del camino. Me di cuenta de que la claridad mental puede ser tan importante como el bienestar físico. Con el apoyo de mis amigos y familiares, pude superar la terrible experiencia con un renovado sentido de propósito y aprecio por la vida en general. ‘From Then On’ es esencialmente mi estado de ánimo desde que tuve ese ‘despertar espiritual. Mi inspiración proviene de los fans. Ellos son quienes mantienen mis pasiones y motivaciones funcionando a su mismo nivel. Eso es duro. Es un poco como preguntarle a una madre cuál de sus hijos es su favorito. Todos ellos tienen significados importantes para mí, pero cada uno de una manera diferente y significativa. es una referencia al accidente y al tiempo dedicado a la recuperación. Todos los nombres de las pistas están diseñados para reflejar la resiliencia y el renacimiento. Quiero que este álbum inspire y motive a quien lo escuche. Que sea instintivo, no impulsado por las tendencias. Las tendencias son solo eso, cosas que están aquí hoy y que se desvanecen o desaparecen mañana. Lo que suena bien en lo profundo de tu cerebro es lo que deberías estar haciendo. Ya sea house, electro, trance o cualquier otra de las clasificaciones de música electrónica más utilizadas.",
        //"content": "When I was a kid, DJing wasn’t kind of like, you know, a job and such. I grew up in East Berlin, in East Germany, so I was listening to the music through the radio and that’s actually something that got me into music. And then when I went to all the clubs after the Berlin Wall went down, I thought, wow this is really awesome. Then I had a very clear idea about the music I really like. So I started to find it in record stores and kind of make mixtapes, as we called them back in the day. And this is how I started. It wasn’t really about looking at it as a career because I remember days where I had one Deutsche Mark and I was thinking, okay, am I going to eat or drink something today, or am I actually saving it for the next two, three days and buy that record on Friday? So there was no such thing as making a living off it. That came somewhat later, so I never pictured it when I was a kid. To me, it was always about the music, about that passion for it and the drive that the music has. And then I kind of went on to do this in a more professional way. ",
        "contenttype": "text/plain",
        "created": 1447639154000,
        "id": "666073008692314113",
        "language": "es"
    }]
}


const profileParams = {
  content: (prof),
  contentType: 'text/plain',
  contentLanguage:'es',
  acceptLanguage:'es',
  consumptionPreferences: true,
  rawScores: true,
};


//---------------------------------------------------------------


//

const express= require('express');
const bodyParser=require('body-parser');
const path= require('path');
const app= express();
const morgan = require('morgan');
app.set('port',3000);


//Middlewares
app.use(morgan('tiny'));
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Routing
app.get('/', (req,res)=>{
  res.render('form.html');

const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const personalityInsights = new PersonalityInsightsV3({
  version: '2017-10-13',
  authenticator: new IamAuthenticator({
    apikey: 'UcdbijSBI1UTj0HOjNlLjmgbS4dYHnLL8VPTSEKRgNL1',
  }),
  url: 'https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/982d8333-69b8-4fc2-891f-833e24dd4215',
  disableSslVerification: true,
});
var prof={
    "contentItems": [
    {
        "content":"es una referencia a un período intensamente difícil en mi vida a principios de 2016. Durante varias semanas después del accidente, me resignaron a una cama de hospital, sin saber si alguna vez volvería a caminar, y mucho menos a hacer música. Aunque estaba contento de estar vivo, inicialmente me molestó mi desgracia y sentí una sensación de frustración e ira. Pero pronto comencé a darme cuenta de que no sólo estaba vivo, sino que estaba rodeado de seres queridos que estarían conmigo a cada paso del camino. Me di cuenta de que la claridad mental puede ser tan importante como el bienestar físico. Con el apoyo de mis amigos y familiares, pude superar la terrible experiencia con un renovado sentido de propósito y aprecio por la vida en general. ‘From Then On’ es esencialmente mi estado de ánimo desde que tuve ese ‘despertar espiritual. Mi inspiración proviene de los fans. Ellos son quienes mantienen mis pasiones y motivaciones funcionando a su mismo nivel. Eso es duro. Es un poco como preguntarle a una madre cuál de sus hijos es su favorito. Todos ellos tienen significados importantes para mí, pero cada uno de una manera diferente y significativa. es una referencia al accidente y al tiempo dedicado a la recuperación. Todos los nombres de las pistas están diseñados para reflejar la resiliencia y el renacimiento. Quiero que este álbum inspire y motive a quien lo escuche. Que sea instintivo, no impulsado por las tendencias. Las tendencias son solo eso, cosas que están aquí hoy y que se desvanecen o desaparecen mañana. Lo que suena bien en lo profundo de tu cerebro es lo que deberías estar haciendo. Ya sea house, electro, trance o cualquier otra de las clasificaciones de música electrónica más utilizadas.",
        //"content": "When I was a kid, DJing wasn’t kind of like, you know, a job and such. I grew up in East Berlin, in East Germany, so I was listening to the music through the radio and that’s actually something that got me into music. And then when I went to all the clubs after the Berlin Wall went down, I thought, wow this is really awesome. Then I had a very clear idea about the music I really like. So I started to find it in record stores and kind of make mixtapes, as we called them back in the day. And this is how I started. It wasn’t really about looking at it as a career because I remember days where I had one Deutsche Mark and I was thinking, okay, am I going to eat or drink something today, or am I actually saving it for the next two, three days and buy that record on Friday? So there was no such thing as making a living off it. That came somewhat later, so I never pictured it when I was a kid. To me, it was always about the music, about that passion for it and the drive that the music has. And then I kind of went on to do this in a more professional way. ",
        "contenttype": "text/plain",
        "created": 1447639154000,
        "id": "666073008692314113",
        "language": "es"
    }]
}


const profileParams = {
  content: (prof),
  contentType: 'text/plain',
  contentLanguage:'es',
  acceptLanguage:'es',
  consumptionPreferences: true,
  rawScores: true,
};





  
res.send("DJ ANDES FORM");


title="Personalidad";
});

app.get('/resultado',(req,res)=>{
title="Resultados personalidad";
res.send("DJ ANDES RESULTADO");

/*
personalityInsights.profile(profileParams)
  .then(profile => {
    console.log(JSON.stringify(profile, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
*/

});




//Server
app.listen(app.get('port'),(req,res)=>{
	console.log('Running on..', app.get('port'));
})