import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ThemeContextProvider from './contexts/ThemeContext'
import ShopContextProvider from './contexts/ShopContext'
import Layout from './components/Layout'
import HomePage from './routes/HomePage'
import ShopPage from './routes/ShopPage'
import CartPage from './routes/CartPage'
import LoginPage from './routes/LoginPage'
import ProductPage from './routes/ProductPage'
import NavBar from './components/Navbar/Navbar'
import './index.css'

function App() {

  return (
    <ThemeContextProvider>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Switch>
            <Layout>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/shop" component={ShopPage} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/product/:id" component={ProductPage} />
            </Layout>
          </Switch>
        </Router>
      </ShopContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
