const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
require('dotenv').config;

//"51778657246321226641fsdklafjasdkljfsklfjd7148924065"
// JWT Secret
//const jwtSecret = process.env['JWTSECRET'];
const jwtSecret= "51778657246321226641fsdklafjasdkljfsklfjd7148924066"
console.log(jwtSecret)

const UsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        
    },
    username:{
      type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true,
        minlength: 8
    },
    rol:{
        type: String, enum: ['Estudiante', 'Administrador', 'Revisor'],
        default:"Estudiante"
    },
    valoraciones:[{
        type: mongoose.Schema.Types.ObjectId, ref:'Valoracion'
    }],
    sessions: [{
        token: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Number,
            required: true
        }
    }]
});


// *** Instance methods ***

/* UsuarioSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    // return the document except the password and sessions (these shouldn't be made available)
    return _.omit(userObject, ['contraseña', 'sessions']);
}

UsuarioSchema.methods.generateAccessAuthToken = function () {
    const user = this;
    return new Promise((resolve, reject) => {
        // Create the JSON Web Token and return that
        jwt.sign({ _id: user._id.toHexString() }, jwtSecret, { expiresIn: "60m" }, (err, token) => {
            if (!err) {
                resolve(token);
            } else {
                // there is an error
                reject();
            }
        })
    })
} */

/* UsuarioSchema.methods.generateRefreshAuthToken = function () {
    // This method simply generates a 64byte hex string - it doesn't save it to the database. saveSessionToDatabase() does that.
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (!err) {
                // no error
                let token = buf.toString('hex');

                return resolve(token);
            }
        })
    })
}

UsuarioSchema.methods.createSession = function () {
    let user = this;

    return user.generateRefreshAuthToken().then((refreshToken) => {
        return saveSessionToDatabase(user, refreshToken);
    }).then((refreshToken) => {
        // saved to database successfully
        // now return the refresh token
        return refreshToken;
    }).catch((e) => {
        return Promise.reject('Failed to save session to database.\n' + e);
    })
} */



/* MODEL METHODS (static methods) */

/* UsuarioSchema.statics.getJWTSecret = () => {
    return jwtSecret;
} */



/* UsuarioSchema.statics.findByIdAndToken = function (_id, token) {
    // finds user by id and token
    // used in auth middleware (verifySession)

    const User = this;

    return User.findOne({
        _id,
        'sessions.token': token
    });
} */


 UsuarioSchema.statics.findByCredentials = function (email, contraseña) {
    let User = this;
    return User.findOne({ email }).then((user) => {
        if (!user) return Promise.reject();

        return new Promise((resolve, reject) => {
            bcrypt.compare(contraseña, user.contraseña, (err, res) => {
                if (res) {
                    resolve(user);
                }
                else {
                    reject();
                }
            })
        })
    })
} 

/* UsuarioSchema.statics.hasRefreshTokenExpired = (expiresAt) => {
    let secondsSinceEpoch = Date.now() / 1000;
    if (expiresAt > secondsSinceEpoch) {
        // hasn't expired
        return false;
    } else {
        // has expired
        return true;
    }
}
 */

/* MIDDLEWARE */
// Before a user document is saved, this code runs
UsuarioSchema.pre('save', function (next) {
    let user = this;
    let costFactor = 10;

    if (user.isModified('contraseña')) {
        // if the password field has been edited/changed then run this code.
        
        // Generate salt and hash password
        bcrypt.genSalt(costFactor, (err, salt) => {
            bcrypt.hash(user.contraseña, salt, (err, hash) => {
                user.contraseña = hash;
                next();
            })
        })
    } else {
        next();
    }
});


/* HELPER METHODS */
/* let saveSessionToDatabase = (user, refreshToken) => {
    // Save session to database
    return new Promise((resolve, reject) => {
        let expiresAt = generateRefreshTokenExpiryTime();

        user.sessions.push({ 'token': refreshToken, expiresAt });

        user.save().then(() => {
            // saved session successfully
            return resolve(refreshToken);
        }).catch((e) => {
            reject(e);
        });
    })
}

let generateRefreshTokenExpiryTime = () => {
    let daysUntilExpire = "10";
    let secondsUntilExpire = ((daysUntilExpire * 24) * 60) * 60;
    return ((Date.now() / 1000) + secondsUntilExpire);
} */




const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = { Usuario }