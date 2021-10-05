const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');

const {Asignatura, Valoracion, Intensificacion} = require('./db/models'); 
const { get } = require('http');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //GET lista de intensificaciones
  app.get('/lista-intensificaciones', (req,res)=>{
    Intensificacion.find({}).populate('asignaturas').then((intensificaciones)=>{
        res.send(intensificaciones);
    });
    
})

//GET una intensificacion de la lista
app.get('/lista-intensificaciones/:id', (req,res)=>{
    Intensificacion.find({_id:req.params.id}).populate('asignaturas').then((intensificaciones)=>{
        res.send(intensificaciones);
    });
    
})

//GET lista de asignaturas
app.get('/asignaturas', (req,res)=>{
    Asignatura.find({}).populate('valoraciones').then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET una asignatura de la lista
app.get('/asignaturas/:id', (req,res)=>{
    Asignatura.find({_id:req.params.id}).populate('valoraciones').then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET las asginaturas de una intensificacion
app.get('/lista-intensificaciones/:id/asignaturas', (req,res)=>{
    Asignatura.find({_id: req.params.id}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET una asignatura de la una intensificacion
app.get('/lista-intensificaciones/:id/asignaturas/:id', (req,res)=>{
    Asignatura.find({_id: req.params.id}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})


//POST intensificacion
app.post('/lista-intensificaciones', (req, res)=> {
    let newIntensificacion = new Intensificacion({
        codigoInt:req.body.codigoInt,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        asignaturas:req.body.asignaturas,
        valoraciones:req.body.valoraciones
    });
    newIntensificacion.save().then((intensificacionDoc) =>{
        res.send(intensificacionDoc);
    })
})

//POST asignatura
app.post('/asignaturas', (req, res)=> {
    let newAsignatura = new Asignatura({
        codigoAsig:req.body.codigoAsig,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        valoraciones:req.body.valoraciones
    });
    newAsignatura.save().then((asignaturaDoc) =>{
        res.send(asignaturaDoc);
    })
})

//POST valoraciones
app.post('/valoraciones', (req, res)=> {
    let newValoracion = new Valoracion({
        comentario:req.body.comentario,
        puntuacion:req.body.puntuacion,
        correoUsuario:req.body.correoUsuario
    });
    newValoracion.save().then((valoracionDoc) =>{
        res.send(valoracionDoc);
    })
})

app.listen(3000,(req, res)=>{
    console.log('Express API is running at port 3000');
})