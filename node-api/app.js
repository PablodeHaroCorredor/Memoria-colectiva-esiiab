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

  app.get('/lista-intensificaciones', (req,res)=>{
    Intensificacion.find({}).then((intensificaciones)=>{
        res.send(intensificaciones);
    });
    
})

app.get('/lista-intensificaciones/:id', (req,res)=>{
    Intensificacion.find({_id:req.params.id}).then((intensificaciones)=>{
        res.send(intensificaciones);
    });
    
})

app.get('/lista-intensificaciones/:id/asignaturas', (req,res)=>{
    Asignatura.find({_id: req.params.id}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})
app.post('/lista-intensificaciones', (req, res)=> {
    let newIntensificacion = new Intensificacion({
        codigoInt:req.body.codigoInt,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        asignaturas:req.body._asignaturaId
    });
    newIntensificacion.save().then((intensificacionDoc) =>{
        res.send(intensificacionDoc);
    })
})

app.post('/lista-intensificaciones/:id/asignaturas', (req, res)=> {
    let newAsignatura = new Asignatura({
        codigoAsig:req.body.codigoAsig,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        _intensificacionId :req.params.id
    });
    newAsignatura.save().then((asignaturaDoc) =>{
        res.send(asignaturaDoc);
    })
})

app.post('/lista-intensificaciones/:codigoInt/asignaturas/:id/valoraciones', (req, res)=> {
        
    let newValoracion = new Valoracion({
        comentario:req.body.comentario,
        puntuacion:req.body.puntuacion,
        _asignaturaId: req.params.id
    });
    newValoracion.save().then((valoracionDoc) =>{
        res.send(valoracionDoc);
    })
})


app.post('/lista-intensificaciones/:id/valoraciones', (req, res)=> {
    let newValoracion = new Valoracion({
        comentario:req.body.comentario,
        puntuacion:req.body.puntuacion,
        _intensificacionId: req.params.id
    });
    newValoracion.save().then((valoracionDoc) =>{
        res.send(valoracionDoc);
    })
})

app.listen(3000,(req, res)=>{
    console.log('Express API is running at port 3000');
})