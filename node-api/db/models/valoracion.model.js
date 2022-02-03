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
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref:'Usuario'
    },
    asigId:{
        type: mongoose.Schema.Types.ObjectId, ref:'Asignatura'
    },
    inteId:{
        type: mongoose.Schema.Types.ObjectId, ref:'Intensificacion'
    },
    directorId:{
        type: mongoose.Schema.Types.ObjectId, ref:'Director'
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId, ref:'Like'
    }],
    fechaCreacion:{
        type:Date,
        required:true,
        default:Date.now
    }
})


ValoracionSchema.pre('save', function preSave(next){
    var fecha = new Date();
    this.fechaCreacion=fecha;
    next();
  });
const Valoracion = mongoose.model('Valoracion', ValoracionSchema);

module.exports = { Valoracion}