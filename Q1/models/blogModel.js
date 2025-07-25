const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    }
});

const User = mongoose.model('Blog', userSchema);
module.exports = User;