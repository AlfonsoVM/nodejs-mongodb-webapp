import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Students from './components/Students';

function App() {
  return (
    <Router>
      <Navbar/>

      <Route path="/" exact>
        <Home/>
      </Route>

      <Route path="students">
        <Students/>
      </Route>
    </Router>
  );
}

export default App;
