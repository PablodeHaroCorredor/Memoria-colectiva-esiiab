const mongoose = require('mongoose');

const ValoracionSchema = new mongoose.Schema({
    puntuacion:{
        type:Number,
        required:true
    },
    comentario:{
        type:String,
        required:true
    },
    correoUsuario:{
        type:String,
        required:true
    }
})

const Valoracion = mongoose.model('Valoracion', ValoracionSchema);

module.exports = { Valoracion}