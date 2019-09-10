const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // TODO: write the schema
    name: { type: String },
    age: { type: Number, min: 0 },
    mood: { type: String }
});

const User = mongoose.model('User', userSchema);
module.exports = User;