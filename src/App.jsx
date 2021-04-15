import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

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
