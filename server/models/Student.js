const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    name: String,
    age: {
        type: Number,
        get: int => Math.round(int),
        set: int => Math.round(int)
    },
    grade: Number
});

module.exports = model('Student', studentSchema);