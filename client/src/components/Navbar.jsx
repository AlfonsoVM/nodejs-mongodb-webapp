import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="#" className="navbar-brand">Programming Highschool</a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to ="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/students" className="nav-link">Students</Link>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;