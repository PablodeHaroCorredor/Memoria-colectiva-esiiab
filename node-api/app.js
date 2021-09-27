const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');

const {Asignatura, Valoracion, Intensificacion} = require('./db/models'); 

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/lista-intensificaciones', (req,res)=>{
    Intensificacion.find({}).then((intensificaciones)=>{
        res.send(intensificaciones);
    });
    
})

app.get('/lista-intensificaciones/:codigo', (req,res)=>{
    Intensificacion.find({_codigo:req.params.codigo}).then((intensificaciones)=>{
        res.send(intensificaciones);
    });
    
})

app.get('/lista-intensificaciones/:codigo/asignaturas', (req,res)=>{
    Asignatura.find({_codigo: req.params.codigo}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})
app.post('/lista-intensificaciones', (req, res)=> {
    let newIntensificacion = new Intensificacion({
        codigo:req.body.codigo,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        asignaturaId:req.body.asignaturaId
    });
    newIntensificacion.save().then((intensificacionDoc) =>{
        res.send(intensificacionDoc);
    })
})

app.post('/lista-intensificaciones/:codigo/asignaturas', (req, res)=> {

    let newAsignatura = new Asignatura({
        codigo:req.body.codigo,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        intensificacionId: req.body.intensificacionId
    });
    newAsignatura.save().then((asignaturaDoc) =>{
        res.send(asignaturaDoc);
    })
})


app.listen(3000,(req, res)=>{
    console.log('Express API is running at port 3000');
})