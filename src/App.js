import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../src/hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuider";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "../src/containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}></Route>
            <Route path="/orders" component={Orders}></Route>
            <Route path="/" component={BurgerBuilder}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
