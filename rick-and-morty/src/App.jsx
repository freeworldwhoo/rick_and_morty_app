import NavBar from './components/navbar/Navbar.jsx'
import Charachters from './pages/charachters/charachters.jsx'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>

      <NavBar/>
      <Switch>
        {/* <Route exact path = '/' component={Charachters}/> */}
        <Route exact path = '/charachters' component = {Charachters}/>
        {/* <Route exact path  = '/epesods' component = {Epesods}/> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;