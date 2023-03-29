let express = require('express'); // inyección de la dependecia
let router = express.Router(); // instanciamos el router

router.post('/addStudent', function(req,res){ //mandamos por post los datos y renderizamos la vista displayData de views
    res.render('displayData', {nombre: req.body.nombre,
                              edad: req.body.edad,
                              nss: req.body.nss,
                              tipoSangre: req.body.tipoSangre});
              
});
module.exports = router; //Se exporta el router