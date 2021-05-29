
import './App.css';
import Dashboard from "./components/Dashboard"; 
import Preferences from './components/Preferences';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React,{useState} from 'react'
import Login from './components/Login';

function App() {

  const [token, setToken] = useState();
  //sino existe un token se mostrara la pantalla de login 
  if (!token) {
    return <Login setToken={setToken}/>
    
  }


  return (
    <div className="App">
      <div className="wrapper">
        <h1>Application</h1>
        
        <Router>
        <Switch>
        <Route path='/Dashboard'>
        <Dashboard />
        </Route>
        <Route path='/Preferences'>
        <Preferences />
        </Route>
        </Switch>
        </Router>
    </div>
  </div>
  );
}

export default App;
