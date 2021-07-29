module.exports = function (app) {

    const Users = require('../controllers/user.controller.js');


    app.get('/api/users', Users.findAll);
}