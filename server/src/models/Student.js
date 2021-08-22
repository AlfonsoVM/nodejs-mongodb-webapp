const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        get: int => Math.round(int),
        set: int => Math.round(int)
    },
    grade: {
        type: Number,
        required: true,
        get: int => Math.round(int),
        set: int => Math.round(int)
    },
    date: {
        type: Date,
        default:Date.now
    }
});

module.exports = model('Student', studentSchema);