const mongoose = require('mongoose');

const deparmentModel = new mongoose.Schema({
    name: { type: String, unique: true },
    description: { type: String }
});

module.exports = mongoose.model('Department', deparmentModel);

