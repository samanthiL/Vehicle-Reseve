// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import Navbars from './components/Navbars';

import Home from './Home';
import Products from './Products';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {

  return (
  
    // <Router>
<div> 
    <div> 
    <Navbars />
    </div>
    <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/product' component={Products} />
    </Switch>
  </Router>
  
  </div>
  
   );
}

export default App;
