const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pablodeharo:JWxJHwxO39nDtpda@memoriacolectivaesiiabd.fiel3.mongodb.net/myFirstDatabase?', { useNewUrlParser: true, useUnifiedTopology:true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});


