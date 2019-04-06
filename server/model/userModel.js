const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    user: { type: String },
    name: { type: String }, 
    age: {type: Number}
});

module.exports = mongoose.model('Users', userModel);