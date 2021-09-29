const mongoose = require('mongoose');

const IntensificacionSchema = new mongoose.Schema({
    codigoInt:{
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
    asignaturas:[{
        type: mongoose.Schema.Types.ObjectId, ref:'Asignatura'
    }],
    valoraciones:[{
        type: mongoose.Schema.Types.ObjectId, ref:'Valoracion'
    }]
    
})

const Intensificacion = mongoose.model('Intensificacion', IntensificacionSchema);

module.exports = { Intensificacion }