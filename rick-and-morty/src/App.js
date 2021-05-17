import NavBar from './components/navbar/Navbar'
import Charachters from './components/home/charachters'
import Places from './components/places/Places'
import Epesods from './components/epesods/Epesods'
import './App.css';
import { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>

      <NavBar/>
      <Switch>
        <Route exact path = '/' component={Charachters}/>
        <Route exact path = '/charachters' component = {Charachters}/>
        <Route exact path  = '/epesods' component = {Epesods}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;