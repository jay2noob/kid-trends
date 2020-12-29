import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ThemeContextProvider from './contexts/ThemeContext'
import ShopContextProvider from './contexts/ShopContext'
import Home from './routes/Home'
import Shop from './routes/Shop'
import Login from './routes/Login'
import ProductPage from './routes/ProductPage'
import './index.css'

function App() {

  return (
    <ThemeContextProvider>
      <ShopContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/product/:id" component={ProductPage} />
          </Switch>
        </Router>
      </ShopContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
