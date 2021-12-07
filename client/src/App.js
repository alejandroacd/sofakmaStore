import React from 'react'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Catalogue from './components/Catalogue/Catalogue'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductScreen from './components/ProductScreen/ProductScreen'
import Cart from './components/CartScreen/CartScreen'
import { CartProvider} from './CartContext/cartContext'
import Faq from './components/FAQ/Faq'


function App() {



  return (
    <>
      <CartProvider >

        <Router>
          <div className="app">

            <Switch>
              <Route exact path="/catalogo" component={Main} />
              <Route exact path="/" component={Home} />
              <Route exact path="/products/:id" component={ProductScreen} />
              <Route exact path="/catalogue" component={Catalogue} />
              <Route exact path="/Cart" component={Cart} />
              <Route exact path="/Faq" component={Faq} />
            </Switch>
          
            </div>

        </Router>
      </CartProvider>
      
    </>

  );

}

export default App;
