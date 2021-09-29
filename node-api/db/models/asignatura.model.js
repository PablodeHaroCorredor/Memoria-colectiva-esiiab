const mongoose = require('mongoose');

const AsignaturaSchema = new mongoose.Schema({
    codigoAsig:{
      type:Number,
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
    valoraciones:[{
        type: mongoose.Schema.Types.ObjectId, ref:'Valoracion'
    }]
   
    
})

const Asignatura = mongoose.model('Asignatura', AsignaturaSchema);

module.exports = { Asignatura }