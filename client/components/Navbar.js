import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout, me } from "../store";
import { Heading } from "@chakra-ui/react";
import { fetchCart } from "../store/order";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order) || { products: [] };
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(me());
  }, []);

  useEffect(() => {
    dispatch(fetchCart(user.id));
  }, [user]);

  let cartCount = 0;

  if (order.products) {
    cartCount = order.products.reduce((accum, element) => {
      return accum + element.orderProduct.quantity;
    }, 0);
  }

  return (
    <div className="navbar">
      <div className="navbar__header">
        <Link to="/" className="navbar__links-item">
          <Heading size="lg">Foodie</Heading>
        </Link>
      </div>

      {isLoggedIn ? (
        <>
          {/* The navbar will show these links after you log in */}
          <div className="navbar__links-center">
            <Link to="/team" className="navbar__links-item">
              Team
            </Link>
            <Link to="/products" className="navbar__links-item">
              Products
            </Link>
            <Link to="/cart" className="navbar__links-item">
              {!order.products
                ? "Cart"
                : order.products.length > 0
                ? `Cart(${cartCount})`
                : "Cart"}
            </Link>
          </div>

          <div className="navbar__links-right">
            <a
              href="#"
              className="navbar__links-item"
              onClick={() => dispatch(logout())}
            >
              Logout
            </a>
          </div>
        </>
      ) : (
        <>
          {/* The navbar will show these links before you log in */}
          <div className="navbar__links-center">
            <Link to="/team" className="navbar__links-item">
              Team
            </Link>
            <Link to="/products" className="navbar__links-item">
              Products
            </Link>
            <Link to="/cart" className="navbar__links-item">
              {!order.products
                ? "Cart"
                : order.products.length > 0
                ? `Cart(${cartCount})`
                : "Cart"}
            </Link>
          </div>
          <div className="navbar__links-right">
            <Link to="/login" className="navbar__links-item">
              Login
            </Link>
            /
            <Link to="/signup" className="navbar__links-item">
              Sign Up
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
