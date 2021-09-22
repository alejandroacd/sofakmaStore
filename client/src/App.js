import React from 'react'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductScreen from './components/ProductScreen/ProductScreen'

function App() {
  return (
    <>
    <Router>   
    <div className="app">
      
    <Switch>
        <Route exact path="/catalogo" component={Main} />
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={ProductScreen} />
    </Switch>
    </div>
    </Router>
    </>

  );

}

export default App;
