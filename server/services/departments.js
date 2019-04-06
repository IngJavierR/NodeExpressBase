const Departments = require('../model/deparmentModel');

exports.getDepartments = () => {
    return new Promise((resolve, reject) => {

        Departments.aggregate([
            {
              '$lookup': {
                'from': 'users', 
                'localField': 'members', 
                'foreignField': 'user', 
                'as': 'users'
              }
            }
          ], (err, result) => {
            if(err) {
                reject(err);
            }
            resolve(result);
        });
    });
}
