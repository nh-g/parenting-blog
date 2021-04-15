import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home'

import './styles/base/style.scss';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component ={() => 404}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
