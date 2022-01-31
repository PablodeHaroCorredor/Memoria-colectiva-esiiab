const mongoose = require('mongoose');

const AsignaturaSchema = new mongoose.Schema({
    
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
    inteId:{
        type: mongoose.Schema.Types.ObjectId, ref:'Intensificacion'

    }
   
   
    
})

const Asignatura = mongoose.model('Asignatura', AsignaturaSchema);

module.exports = { Asignatura }