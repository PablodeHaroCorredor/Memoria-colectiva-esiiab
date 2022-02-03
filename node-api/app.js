const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs")
const {Asignatura, Valoracion, Intensificacion, Usuario, Director, Etiqueta} = require('./db/models'); 
const { get } = require('http');
const { send } = require('process');
const nodemailer = require('nodemailer');
const details = require("./details.json");
const path = require('path');
const appRoot = require('app-root-path');

app.use(bodyParser.json());
app.use(express.static(path.join(appRoot.path,'../dist/Memoria-colectiva-esiiab')));
console.log(__dirname)


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../dist/Memoria-colectiva-esiiab')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
  });



/* let authenticate = (req, res, next) => {
    let token = req.header('x-access-token');

    // verify the JWT
    jwt.verify(token, Usuario.getJWTSecret(), (err, decoded) => {
        if (err) {
            // there was an error
            // jwt is invalid - * DO NOT AUTHENTICATE *
            res.status(401).send(err);
        } else {
            // jwt is valid
            req.user_id = decoded._id;
            next();
        }
    });
}

// Verify Refresh Token Middleware (which will be verifying the session)
let verifySession = (req, res, next) => {
    // grab the refresh token from the request header
    let refreshToken = req.header('x-refresh-token');

    // grab the _id from the request header
    let _id = req.header('_id');

    Usuario.findByIdAndToken(_id, refreshToken).then((user) => {
        if (!user) {
            // user couldn't be found
            return Promise.reject({
                'error': 'User not found. Make sure that the refresh token and user id are correct'
            });
        }


        // if the code reaches here - the user was found
        // therefore the refresh token exists in the database - but we still have to check if it has expired or not

        req.user_id = user._id;
        req.userObject = user;
        req.refreshToken = refreshToken;

        let isSessionValid = false;

        user.sessions.forEach((session) => {
            if (session.token === refreshToken) {
                // check if the session has expired
                if (Usuario.hasRefreshTokenExpired(session.expiresAt) === false) {
                    // refresh token has not expired
                    isSessionValid = true;
                }
            }
        });

        if (isSessionValid) {
            // the session is VALID - call next() to continue with processing this web request
            next();
        } else {
            // the session is not valid
            return Promise.reject({
                'error': 'Refresh token has expired or the session is invalid'
            })
        }

    }).catch((e) => {
        res.status(401).send(e);
    }) */
//}






  //GET lista de intensificaciones
  app.get('/api/lista-intensificaciones',(req,res)=>{
    Intensificacion.find({}).then((intensificaciones)=>{
        res.send(intensificaciones);
    });
    
})

//GET una intensificacion de la lista
app.get('/api/lista-intensificaciones/intensificacion/:id',(req,res)=>{
    Intensificacion.find({_id:req.params.id}).then((intensificaciones)=>{
        res.send(intensificaciones);
    });
    
})

//GET asignaturas de la lista
app.get('/api/lista-intensificaciones/intensificacion/:inteId/asignaturas',(req,res)=>{
    Asignatura.find({inteId:req.params.inteId}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

app.get('/api/lista-intensificaciones/intensificacion/:inteId/asignaturas/:id',(req,res)=>{
    Asignatura.find({_id:req.params.id}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET valoraciones de una intensificacion
app.get('/api/lista-intensificaciones/intensificacion/:inteId/valoraciones',(req,res)=>{
    Valoracion.find({inteId:req.params.inteId}).then((valoraciones)=>{
        res.send(valoraciones);
    });
    
})

//GET valoraciones de una asignatura
app.get('/api/lista-intensificaciones/intensificacion/:inteId/asignaturas/:id/valoraciones',(req,res)=>{
    Valoracion.find({asigId:req.params.id}).then((valoraciones)=>{
        res.send(valoraciones);
    });
    
})


//GET valoraciones de director
app.get('/api/lista-directores/director/:direcId/valoraciones',(req,res)=>{
    Valoracion.find({directorId:req.params.direcId}).then((valoraciones)=>{
        res.send(valoraciones);
    });
    
})

app.get('/api/valoraciones/:id',(req,res)=>{
    Valoracion.find({_id:req.params.id}).then((valoraciones)=>{
        res.send(valoraciones);
    });
    
})

//UPDATE intes
app.put('/api/lista-intensificaciones/:id', (req, res)=> {
    Intensificacion.findOneAndUpdate({_id:req.params.id},{
        $push:req.body
    }).then(()=>{
        res.sendStatus(200)
    });
})


//GET lista de asignaturas
app.get('/api/asignaturas', (req,res)=>{
    Asignatura.find({}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET lista de asignaturas
app.get('/api/asignaturas/:id', (req,res)=>{
    Asignatura.find({_id:req.params.id}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET todas las etiquetas
app.get('/api/etiquetas', (req,res)=>{
    Etiqueta.find({}).then((etiquetas)=>{
        res.send(etiquetas);
    });
    
})


//GET todas las etiquetas de un director
app.get('/api/lista-directores/director/:directId/etiquetas', (req,res)=>{
    Etiqueta.find({directorId: req.params.directId}).then((etiquetas)=>{
        res.send(etiquetas);
    });
    
})


//POST etiquetas de un director
app.post('/api/lista-directores/director/:directId/etiquetas', (req,res)=>{
    let newEtiqueta = new Etiqueta({
        nombre:req.body.nombre,
        directorId:req.params.directId
    });
    newEtiqueta.save().then((etiquetaDoc) =>{
        res.send(etiquetaDoc);
    })
    
})

//GET las asginaturas de una intensificacion
app.get('/api/lista-intensificaciones/:id/asignaturas', (req,res)=>{
    Asignatura.find({asigId: req.params.id}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET una asignatura de la una intensificacion
app.get('/api/lista-intensificaciones/:id/asignaturas/:id', (req,res)=>{
    Asignatura.find({_id: req.params.id}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET Directores
app.get('/api/lista-directores', (req,res)=>{
    Director.find({}).then((directores)=>{
        res.send(directores);
    });
    
})

//GET Directores
app.get('/api/lista-directores/director/:direcId', (req,res)=>{
    Director.find({_id:req.params.direcId}).then((directores)=>{
        res.send(directores);
    });
    
})

//POST Directores
app.post('/api/lista-directores/director', (req,res)=>{    
    let newDirector = new Director({
        nombre:req.body.nombre
    });
    newDirector.save().then((directorDoc) =>{
        res.send(directorDoc);
    })
})


//PATCH Directores
app.put('/api/lista-directores/director/:directId', (req,res)=>{    
    Director.findOneAndUpdate({_id:req.params.directId},{
        $push:req.body
    }).then(()=>{
        res.send({'message': 'actualiado correctamente'})
    });
})


//PATCH comentarios directores
app.patch('/api/lista-directores/director/:directId/valoraciones/:id', (req,res)=>{    
    Valoracion.findOneAndUpdate({_id:req.params.id},{
        $set:req.body
    }).then(()=>{
        res.send({'message': 'actualiado correctamente'})
    });
})

//POST intensificacion
app.post('/api/lista-intensificaciones/intensificacion', (req, res)=> {
    let newIntensificacion = new Intensificacion({
        nombre:req.body.nombre,
        descripcion:req.body.descripcion
    });
    newIntensificacion.save().then((intensificacionDoc) =>{
        res.send(intensificacionDoc);
    })
})

//PATCH intensificacion
app.patch('/api/lista-intensificaciones/intensificacion/:id', (req, res)=> {
    Intensificacion.findOneAndUpdate({_id:req.params.id},{
        $set:req.body
    }).then(()=>{
        res.send({'message': 'actualiado correctamente'})
    });
})


//POST asignatura de una intensificacion
app.post('/api/lista-intensificaciones/intensificacion/:inteId/asignaturas', (req, res)=> {
    let newAsignatura = new Asignatura({
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        inteId: req.params.inteId
    });
    newAsignatura.save().then((asignaturaDoc) =>{
        res.send(asignaturaDoc);
    })
})



app.post('/api/asignaturas', (req, res)=> {

    let newAsignatura = new Asignatura({
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        inteId: req.body.inteId
    });
    newAsignatura.save().then((asignaturaDoc) =>{
        res.send(asignaturaDoc);
    })
})


app.put('/api/asignaturas/:id', (req, res)=> {
    Asignatura.findOneAndUpdate({_id:req.params.id},{
        $push:req.body
    }).then(()=>{
        res.sendStatus(200)
    });
})




//POST valoraciones de intensificacion
app.post('/api/lista-intensificaciones/intensificacion/:inteId/valoraciones', (req, res)=> {
    let newValoracion = new Valoracion({
        inteId:req.params.inteId,
        comentario:req.body.comentario,
        puntuacion:req.body.puntuacion,
        userId:req.body.usuario
    });
    newValoracion.save().then((valoracionDoc) =>{
        res.send(valoracionDoc);
    })
})


//POST valoraciones de Muii
app.post('/api/muii/valoraciones', (req, res)=> {
    let newValoracion = new Valoracion({
        asigId: 1,
        comentario:req.body.comentario,
        puntuacion:req.body.puntuacion,
        userId:req.body.usuario
    });
    newValoracion.save().then((valoracionDoc) =>{
        res.send(valoracionDoc);
    })
})


//get valoraciones de Muii
app.get('/api/muii/:id/valoraciones', (req, res)=> {
    Valoracion.find({asigId: req.params.id}).then((Valoraciones)=>{
        res.send(Valoraciones);
    });
})


//POST valoraciones de Director
app.post('/api/lista-directores/director/:directId/valoraciones', (req, res)=> {
    let newValoracion = new Valoracion({
        directorId:req.params.directId,
        comentario:req.body.comentario,
        puntuacion:req.body.puntuacion,
        userId:req.body.usuario
    });
    newValoracion.save().then((valoracionDoc) =>{
        res.send(valoracionDoc);
    })
})

//patch comentario intensificacion  
app.patch('/api/lista-intensificaciones/intensificacion/:inteId/valoraciones/:id', (req, res)=> {
    Valoracion.findOneAndUpdate({_id:req.params.id},{
        $set:req.body
    }).then(()=>{
        res.send({'message': 'actualiado correctamente'})
    });
})

//patch comentario asignatura  
app.patch('/api/lista-intensificaciones/intensificacion/:inteId/asignaturas/:asigId/valoraciones/:id', (req, res)=> {
    Valoracion.findOneAndUpdate({_id:req.params.id},{
        $set:req.body
    }).then(()=>{
        res.send({'message': 'actualiado correctamente'})
    });
})

//POST valoraciones de asignatura
app.post('/api/lista-intensificaciones/intensificacion/:inteId/asignaturas/:asigId/valoraciones', (req, res)=> {
    let newValoracion = new Valoracion({
        asigId:req.params.asigId,
        comentario:req.body.comentario,
        puntuacion:req.body.puntuacion,
        userId:req.body.usuario
    });
    newValoracion.save().then((valoracionDoc) =>{
        res.send(valoracionDoc);
    })
})


app.patch('/api/valoraciones/:id', (req, res)=> {
    Valoracion.findOneAndUpdate({_id:req.params.id},{
        $set:req.body
    }).then(()=>{
        res.sendStatus(200)
    });
})

app.delete('/api/lista-intensificaciones/intensificacion/:inteId/valoraciones/:id',(req, res)=> {
    Valoracion.findOneAndRemove({
        _id:req.params.id
    }).then((removedValoracionDoc)=>{
        res.sendStatus(removedValoracionDoc)
    });
})


//Sign up
app.post('/api/usuarios',(req, res) => {
    // User sign up

    let body = req.body;
    let newUser = new Usuario(body);

    newUser.save().then(() => {
        //return newUser.createSession();
    }).then((refreshToken) => {
        // Session created successfully - refreshToken returned.
        // now we geneate an access auth token for the user

       // return newUser.generateAccessAuthToken().then((accessToken) => {
            // access auth token generated successfully, now we return an object containing the auth tokens
         //   return { accessToken, refreshToken }
        }).catch((e) => {
            res.status(400).send(e);
        })
    })/* .then((authTokens) => {
        // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
        res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(newUser);
    }) */



/**
 * POST /users/login
 * Purpose: Login
 */
app.post('/api/usuarios/login', (req, res) => {
    let email = req.body.email;
    let contraseña = req.body.contraseña;
     Usuario.findByCredentials(email, contraseña).then((user) => {
        /* return user.createSession().then((refreshToken) => {
            // Session created successfully - refreshToken returned.
            // now we geneate an access auth token for the user

            return user.generateAccessAuthToken().then((accessToken) => {
                // access auth token generated successfully, now we return an object containing the auth tokens
                return { accessToken, refreshToken }
            });
        }).then((authTokens) => {
            // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
            res
                .header('x-refresh-token', authTokens.refreshToken)
                .header('x-access-token', authTokens.accessToken)
                .send(user);
        })  */
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
})


/* app.get('/usuarios/me/access-token', (req, res) => {
    // we know that the user/caller is authenticated and we have the user_id and user object available to us
    req.userObject.generateAccessAuthToken().then((accessToken) => {
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((e) => {
        res.status(400).send(e);
    });
})
 */

//SEND EMAIL



app.post("/api/sendmail", (req, res) => {
    console.log("request came");
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        requireTLS: true,// true for 465, false for other ports
        auth: {
          user: details.email,
          pass: details.password
        }
    });
    let mailOptions = {
        from: 'pablodeharocorredor@gmail.com', // sender address
        to: req.body.email, // list of receivers
        subject: "Registro Completado", // Subject line
        text: "¿Gracias por registrarte! \n Tu contraseña es: "+req.body.contraseña
      };

      // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.status(500).send(error.message);
        }else{
            console.log("Email enviado")
            res.status(200).jsonp(req.body)
        }
    });
  });
  
  app.get('*',(req, res) => {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.sendFile(path.join(appRoot.path, '../dist/Memoria-colectiva-esiiab/index.html'));
}); 
  
/* const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Express API is running at port ${PORT}`);
}); */
 const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('Express API is running at port ', port);
})
  
