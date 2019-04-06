const User = require('../model/userModel');

exports.getUsers = (query) => {
    return new Promise((resolve, reject) => {

        User.aggregate([
            {
              '$match': {
                'age': {
                  '$gte': 100000
                }
              }
            }, {
              '$limit': 5
            }
          ], (err, result) => {
            if(err) {
                reject(err);
            }
            resolve(result);
        });

        // let queryCustom = {age: {$gte: 10000}};
        // User.find(queryCustom, (err, result) => {
        //     if(err) {
        //         reject(err);
        //     }
        //     resolve(result);
        // });
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

exports.saveManyUsers = () => {
    return new Promise((resolve, reject) => {
        let users = createRandomUsers();
        User.insertMany(users, (err) => {
            if(err) {
                reject(err);
            }
            resolve();
        })
    });
}

const createRandomUsers = () => {
    return [...Array(100).keys()].map(x => {
        return {
            user: `USER_${x}`,
            name: `Axity${x}`,
            age: x
        };
    });
}