const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true,
        minlength:1,
        trim: true
    },
    etiquetas:[{
        type: String
    }]
    
})

const Director = mongoose.model('Director', DirectorSchema);

module.exports = { Director }