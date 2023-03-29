let express = require('express');//inyeccion de la dependencia
let app = express();//app que permite funcionar el servidor

let PORT = process.env.PORT || 3000; //se define el puerto de escucha del servidor

app.use(express.urlencoded({extended: true})); //Urlencoded se usa para poder tomar los valores del body de un html

let personsRoute = require('./routes/person');//incluimos la ruta de personas

let displayStudentRoute = require('./routes/displayData');//incluimos la ruta de displayData

let studentRoute = require('./routes/student');//incluimos la ruta de student

app.use(personsRoute);//usamos la ruta de personas
app.use(displayStudentRoute);//usamos la ruta de de displayData
app.use(studentRoute);//usamos la ruta de student


app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req,res,next ){
    console.log('Request url:' + req.url);
    next();
});


// app.post('/addStudent', function(req,res){
//     res.render('displayData', {nombre: req.body.nombre,
//                               edad: req.body.edad,
//                               nss: req.body.nss,
//                               tipoSangre: req.body.tipoSangre});
              
// });

app.listen(PORT,()=>{
    console.log('escuchando en el puerto 3000')
});