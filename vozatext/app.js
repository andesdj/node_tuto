    const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const languageTranslator = new LanguageTranslatorV3({
        version: '2018-05-01',
        authenticator: new IamAuthenticator({
            apikey: 'OZ9Ke8U2pmq-L-kV_boCnGTHhfjwyKdm--qdk58PvcHR',
        }),
        url: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/a9eebf92-dc6c-4e54-83c4-4f2e994ace1e',
    });

    var parameters = {
        //text: 'Hello my friends. Specify a language code to filter results by target language',
        text: ' Hola mis amigos, esta es mi prueba de traductor con API de IBM',
        model_id: 'es-en',
        target: 'en'
    };


    languageTranslator.translate(
        parameters,
        function(error, res) {
            if (error) {
                console.log(error);
            } else {
                console.log(JSON.stringify(res, null, 2));
            }

        }
    )