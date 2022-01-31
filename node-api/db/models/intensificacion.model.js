const mongoose = require('mongoose');

const IntensificacionSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true,
        minlength:1,
        trim: true
    },
    descripcion:{
        type: String,
        required:true
    }
    
})

const Intensificacion = mongoose.model('Intensificacion', IntensificacionSchema);

module.exports = { Intensificacion }