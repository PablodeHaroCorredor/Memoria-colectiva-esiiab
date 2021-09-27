const mongoose = require('mongoose');

const IntensificacionSchema = new mongoose.Schema({
    codigo:{
      type:Number,
      min: 1,
      max:4,
      required:true

    },
    nombre:{
        type: String,
        required:true,
        minlength:1,
        trim: true
    },
    descripcion:{
        type: String,
        required:true
    },
    asignaturaId:[{
        type: mongoose.Schema.Types.ObjectId, ref:'Asignatura'
    }]
    
})

const Intensificacion = mongoose.model('Intensificacion', IntensificacionSchema);

module.exports = { Intensificacion }