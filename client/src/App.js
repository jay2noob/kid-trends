import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import Products from './routes/Products'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
