import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext'
import ProductsContextProvider from './contexts/ProductsContext'
import Home from './routes/Home'
import Products from './routes/Products'

function App() {
  return (
    <ThemeContextProvider>
      <ProductsContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </Router>
      </ProductsContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
