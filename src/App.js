import './App.css';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/pages/HomePage/Home'

function App() {
  return (
<Router> 
<Navbar/>
<Switch>
  <Route path='/' exact component={Home}/>
</Switch>
</Router>
  );
}

export default App;
