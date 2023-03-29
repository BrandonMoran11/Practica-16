let express = require('express'); // inyección de la dependecia
let router = express.Router(); // instanciamos el router

router.get('/person', function (req, res) { 
    res.send('¡Has solicitado el listado de personas!'); //Se envia un mensaje
});

module.exports = router; //Se exporta el router