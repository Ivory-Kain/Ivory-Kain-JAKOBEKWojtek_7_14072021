const db = require('../config/db.config.js');
const User = db.user;
const Profile = db.profile;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {

    var user 
    // Save User to Database
    User.create({
        
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        }).then(createdUser => {		
            // Send created customer to client
            user = createdUser;
            
            Profile.create({
                fullName: req.body.fullName,
                               
            })
            .then(profile => {
                user.setProfile(profile)
                res.send('OK');
            })
        })
        .then(() => res.status(201).json({
            message: 'Utilisateur créé !'
        }))
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.login = (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User Not found."
                });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({
                            error: 'Mot de passe incorrect !'
                        });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign({
                                userId: user._id
                            },
                            'RANDOM_TOKEN_SECRET', {
                                expiresIn: '24h'
                            }
                        )
                    });
                })
                .catch(error => res.status(500).json({
                    error
                }));
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};