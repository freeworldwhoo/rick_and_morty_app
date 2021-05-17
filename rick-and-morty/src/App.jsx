import NavBar from './components/navbar/Navbar.jsx'
import Charachters from './pages/charachters/charachters.jsx'
import Home from './pages/home/home.jsx'
import Epesodes from './pages/epesodes/epesodes.jsx'
import Locations from './pages/locations/locations.jsx'
import Favorits from './pages/favorits/favorits.jsx'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>

      <NavBar/>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/charachters' component = {Charachters}/>
        <Route exact path  = '/epesodes' component = {Epesodes}/>
        <Route exact path  = '/favorit' component = {Favorits}/>
        <Route exact path  = '/locations' component = {Locations}/>
        
      </Switch>
    </Router>
    </>
  );
}

export default App;