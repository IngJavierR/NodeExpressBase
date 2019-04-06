const express = require('express');
const usersWeb = require('./users/users-web');
const router = express.Router();

module.exports = (app) => {

    router.route('/users')
          .get(usersWeb.getUsers)
          .post(usersWeb.saveUser)
          .delete(usersWeb.deleteUser)
          .put(usersWeb.updateUser);

    app.use('/api', router);
}