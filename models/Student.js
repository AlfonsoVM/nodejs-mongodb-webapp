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

// exports.Student = model('Student', studentSchema); 
module.exports = model('Student', studentSchema); 