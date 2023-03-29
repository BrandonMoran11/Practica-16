let express = require('express'); // inyección de la dependecia
let router = express.Router(); // instanciamos el router

router.get('/student', function (req, res) {
    res.render('student'); //Se renderiza la vista de estudent de la carpeta views
});

module.exports = router; //Se exporta el router