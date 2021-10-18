import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Burgerbuilder from './Containers/Burgerbuilder/Burgerbuilder';
import Checkout from './Containers/Checkout/Checkout'
import Orders from './Containers/Orders/Orders'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Route path="/Checkout" component={Checkout}/>
          <Route path="/orders"  component={Orders}/>
          <Route path="/" exact component={Burgerbuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
