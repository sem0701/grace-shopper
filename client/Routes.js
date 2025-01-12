import React, { Component, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import Team from "./components/Team/Team";
import AllProducts from "./components/Products/AllProducts";
import SingleProduct from "./components/Products/SingleProduct";
import Cart from "./components/Cart/Cart";

/**
 * COMPONENT
 */
const Routes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Home} />
          <Route path="/signup" exact component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/login">{Login}</Route>
          <Route path="/signup">{Signup}</Route>
          <Route exact path="/team" component={Team} />
          <Route exact path="/Products" component={AllProducts} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      )}
    </>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes;
