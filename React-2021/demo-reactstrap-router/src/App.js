import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import {CartProvider} from './context/Cart';

class App extends Component {
  render(){
    return(
      <CartProvider>
      <Router>
        <div>
          <TopMenu/>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/carts">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
      </Router>
      </CartProvider>
    )
  }
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Cart() {
  return <h2>Cart</h2>;
}

export default App;
