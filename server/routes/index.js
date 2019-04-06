const express = require('express');
const usersWeb = require('./users/users-web');
const departmentsWeb = require('./departments/departments-web');
const router = express.Router();

module.exports = (app) => {

    router.route('/users')
        .get(usersWeb.getUsers)
        .post(usersWeb.saveUser)
        .delete(usersWeb.deleteUser)
        .put(usersWeb.updateUser);

    router.route('/random')
        .post(usersWeb.createManyUsers);
    
    router.route('/departments')
        .get(departmentsWeb.getDepartments);

    app.use('/api', router);
}