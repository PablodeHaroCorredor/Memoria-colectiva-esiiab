const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
    extensionDir:{
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
    valoraciones:[{
        type: mongoose.Schema.Types.ObjectId, ref:'Valoracion'
    }]
    
})

const Director = mongoose.model('Director', DirectorSchema);

module.exports = { Director }