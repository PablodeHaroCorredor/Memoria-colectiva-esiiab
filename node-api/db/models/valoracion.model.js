const mongoose = require('mongoose');

const ValoracionSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    puntuacion:{
        type:Number,
        required:true
    },
    comentario:{
        type:String,
        required:true
    },
    asignaturaId:{
        type:mongoose.Schema.Types.ObjectId, ref:'Asignatura',
        required:true
    },
    intensificacionId:{
        type:mongoose.Schema.Types.ObjectId, ref:'Intensificacion',
        required:true
    }
    
})

const Valoracion = mongoose.model('Valoracion', ValoracionSchema);

module.exports = { Valoracion}