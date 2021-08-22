import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './components/Home';
import StudentAdd from './components/StudentAdd';
import StudentList from './components/StudentList';

function App() {
  return (
    <Router>
      <Navigation/>

      <Route path="/" exact>
        <Home/>
      </Route>

      <Route path="/students">
        <StudentAdd/>
        <StudentList/>
      </Route>
    </Router>
  );
}

export default App;