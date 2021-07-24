import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Fibonacci Schwarzenegger</h1>
          <ul style={{ display: 'inline', fontSize: '2em' }}>
            <li>
              <Link to='/'>Calculator</Link>
            </li>
            <li>
              <Link to='/otherpage'>Other Page</Link>
            </li>
          </ul>
        </header>
        <br />
        <div>
          <Route exact path='/' component={Fib} />
          <Route path='/otherpage' component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
