//modules
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
let i = 0;

// newStudent POST
router.post('/students/add', (req, res) => {
    student = new Student({
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade
    });

    student.save()
    .then(result => {
        console.log(result);
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
})

router.get('/students', (req, res) => {
    Student.find()
        .then(
            students => res.json(students),
            i++,
            console.log(i),
        )

})

module.exports = router;