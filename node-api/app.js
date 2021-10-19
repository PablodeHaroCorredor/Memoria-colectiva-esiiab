const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs")
const {Asignatura, Valoracion, Intensificacion, Usuario} = require('./db/models'); 
const { get } = require('http');

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
  });


let authenticate = (req, res, next) => {
    let token = req.header('x-access-token');

    // verify the JWT
    jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
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
                if (User.hasRefreshTokenExpired(session.expiresAt) === false) {
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
    })
}






  //GET lista de intensificaciones
  app.get('/lista-intensificaciones', (req,res)=>{
    Intensificacion.find({}).populate('asignaturas').then((intensificaciones)=>{
        res.send(intensificaciones);
    });
    
})

//GET una intensificacion de la lista
app.get('/lista-intensificaciones/:id', (req,res)=>{
    Intensificacion.find({_id:req.params.id}).populate('asignaturas').then((intensificaciones)=>{
        res.send(intensificaciones);
    });
    
})

//GET lista de asignaturas
app.get('/asignaturas', (req,res)=>{
    Asignatura.find({}).populate('valoraciones').then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET una asignatura de la lista
app.get('/asignaturas/:id', (req,res)=>{
    Asignatura.find({_id:req.params.id}).populate('valoraciones').then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET las asginaturas de una intensificacion
app.get('/lista-intensificaciones/:id/asignaturas', (req,res)=>{
    Asignatura.find({_id: req.params.id}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})

//GET una asignatura de la una intensificacion
app.get('/lista-intensificaciones/:id/asignaturas/:id', (req,res)=>{
    Asignatura.find({_id: req.params.id}).then((asignaturas)=>{
        res.send(asignaturas);
    });
    
})


//POST intensificacion
app.post('/lista-intensificaciones', (req, res)=> {
    let newIntensificacion = new Intensificacion({
        codigoInt:req.body.codigoInt,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        asignaturas:req.body.asignaturas,
        valoraciones:req.body.valoraciones
    });
    newIntensificacion.save().then((intensificacionDoc) =>{
        res.send(intensificacionDoc);
    })
})

//POST asignatura
app.post('/asignaturas', (req, res)=> {
    let newAsignatura = new Asignatura({
        codigoAsig:req.body.codigoAsig,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        valoraciones:req.body.valoraciones
    });
    newAsignatura.save().then((asignaturaDoc) =>{
        res.send(asignaturaDoc);
    })
})

//POST valoraciones
app.post('/valoraciones', (req, res)=> {
    let newValoracion = new Valoracion({
        comentario:req.body.comentario,
        puntuacion:req.body.puntuacion,
        correoUsuario:req.body.correoUsuario
    });
    newValoracion.save().then((valoracionDoc) =>{
        res.send(valoracionDoc);
    })
})

app.post('/usuarios', (req, res) => {
    // User sign up

    let body = req.body;
    let newUser = new Usuario(body);

    newUser.save().then(() => {
        return newUser.createSession();
    }).then((refreshToken) => {
        // Session created successfully - refreshToken returned.
        // now we geneate an access auth token for the user

        return newUser.generateAccessAuthToken().then((accessToken) => {
            // access auth token generated successfully, now we return an object containing the auth tokens
            return { accessToken, refreshToken }
        });
    }).then((authTokens) => {
        // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
        res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(newUser);
    }).catch((e) => {
        res.status(400).send(e);
    })
})


/**
 * POST /users/login
 * Purpose: Login
 */
app.post('/usuarios/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    Usuario.findByCredentials(email, password).then((user) => {
        return user.createSession().then((refreshToken) => {
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
        })
    }).catch((e) => {
        res.status(400).send(e);
    });
})


app.get('/usuarios/me/access-token', verifySession, (req, res) => {
    // we know that the user/caller is authenticated and we have the user_id and user object available to us
    req.userObject.generateAccessAuthToken().then((accessToken) => {
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((e) => {
        res.status(400).send(e);
    });
})




app.listen(3000,(req, res)=>{
    console.log('Express API is running at port 3000');
})