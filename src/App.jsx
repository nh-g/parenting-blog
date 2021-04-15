import {BrowserRouter as Route, Switch, Route, Redirect, Router} from 'react-router-dom';

import Navigation from './components/Navigation';
import './styles/base/style.scss';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
