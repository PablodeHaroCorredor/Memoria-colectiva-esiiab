const mongoose = require('mongoose');

const EtiquetaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true,
        minlength:1,
        trim: true
    },
    directorId:{
        type: mongoose.Schema.Types.ObjectId, ref:'Director'
    }
    
})

const Etiqueta = mongoose.model('Etiqueta', EtiquetaSchema);

module.exports = { Etiqueta }