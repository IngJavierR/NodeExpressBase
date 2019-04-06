const userService = require('../../services/users');
const debug = require('debug')('app');

exports.getUsers = async (req, res) => {
    try{
        let result = await userService.getUsers(req.query);
        return res.json(result);
    }catch(err) {
        debug(err);
        return res.sendStatus(401);
    }
}

exports.saveUser = async (req, res) => {
    try {
        await userService.saveUser(req.body);
        return res.sendStatus(200);
    }catch(err) {
        debug(err);
        return res.sendStatus(401);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.query.id);
        return res.sendStatus(200);
    }catch(err) {
        debug(err);
        return res.sendStatus(401);
    }
}

exports.updateUser = async (req, res) => {
    try {
        await userService.updateUser(req.body);
        return res.sendStatus(200);
    }catch(err) {
        debug(err);
        return res.sendStatus(401);
    }
}