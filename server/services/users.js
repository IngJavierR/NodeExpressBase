const User = require('../model/userModel');

exports.getUsers = (query) => {
    return new Promise((resolve, reject) => {
        User.find(query, (err, result) => {
            if(err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

exports.saveUser = (userToSave) => {
    return new Promise((resolve, reject) => {
        let user = new User(userToSave);
        user.save((err) => {
            if(err) {
                reject(err);
            }
            resolve();
        });
    });
}

exports.deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        User.findOneAndDelete(id, (err) => {
            if(err) {
                reject(err);
            }
            resolve();
        })
    });
}

exports.updateUser = (user) => {
    return new Promise((resolve, reject) => {
        console.log('user', user);
        User.findOneAndUpdate(user.id, user, (err) => {
            if(err) {
                reject(err);
            }
            resolve();
        })
    });
}