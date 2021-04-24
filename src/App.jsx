import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home'
import Blog from './pages/Blog'

import './styles/style.scss';
function App() {
  const user = {
    lastName: 'Giang',
    firstName: 'Coder'
  }

  return (
    <Router>
      <div className="App">
        <Navigation user = {user}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path ='/blog' component={Blog}/>
          <Route component ={() => 404}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
