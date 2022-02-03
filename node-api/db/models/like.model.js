const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    puntuacion:{
        type: Number,
        required:true
    },
    valoracionId:{
        type: mongoose.Schema.Types.ObjectId, ref:'Valoracion'
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref:'Usuario'
    }
    
})

const Like = mongoose.model('Like', LikeSchema);

module.exports = { Like }