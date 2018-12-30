import React, { Fragment } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "../page/main";
import Header from "../components/header";
import Footer from "../components/footer";
import Color from "../components/changeColor";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Color />
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
