import React, { useState } from 'react';
import axios from 'axios';

function StudentAdd() {
    const [input, setInput] = useState({
        name: '',
        age: '',
        grade: ''
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newStudent = {
            name: input.name,
            age: input.age,
            grade: input.grade
        }

        if ((newStudent.name !== '') && (newStudent.age !== '') && (newStudent.grade !== '')) {
            //POST
            axios.post('http://localhost:3001/students/add', newStudent)
                .then(res => console.log(res.data));

            //Clear state
            setInput({
                name: '',
                age: '',
                grade: ''
            });
        }
    };

    return (
    <div className="container py-3">
        <p className="lead">Add Students</p>
            <form>
                <input required type="text" onChange={handleChange} value={input.name} id="name" name="name" placeholder="Student's name" className="form-control my-2"></input>
                <input required type="number" onChange={handleChange} value={input.age} id="age" name="age" placeholder="Student's age" className="form-control my-2"></input>
                <input required type="number" onChange={handleChange} value={input.grade} id="grade" name="grade" placeholder="Student's grade" className="form-control my-2"></input>
                <button onClick={handleClick} type="submit" id="button" name="button" className="btn btn-success">Add</button>
            </form>
    </div>
)};

export default StudentAdd;