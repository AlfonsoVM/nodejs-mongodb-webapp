import React, { useState, useEffect } from 'react';

function StudentList() {
    const [students, setStudents] = useState([{
        name: '',
        age: '',
        grade: ''
    }])

    useEffect(() => {
        fetch('/students')
        .then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => setStudents(jsonRes));
    }, []);

    return (
    <div className="container py-3">
        <table id="table" className="table">
            <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student =>
                <tr>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.grade}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
)};

export default StudentList;