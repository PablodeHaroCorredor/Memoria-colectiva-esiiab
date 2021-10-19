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
    usuario:{
        type: mongoose.Schema.Types.ObjectId, ref:'Usuario',
        required:true
    }
})

const Valoracion = mongoose.model('Valoracion', ValoracionSchema);

module.exports = { Valoracion}