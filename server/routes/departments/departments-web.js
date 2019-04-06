const departmentService = require('../../services/departments');
const debug = require('debug')('app');

exports.getDepartments = async (req, res) => {
    try{
        let result = await departmentService.getDepartments();
        return res.json(result);
    }catch(err) {
        debug(err);
        return res.sendStatus(401);
    }
}
