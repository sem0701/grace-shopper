import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Heading } from "@chakra-ui/react";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navbar__header">
        <Heading size="lg">Foodie</Heading>
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
              Cart
            </Link>
          </div>

          <div className="navbar__links-right">
            <Link to="/home" className="navbar__links-item">
              Home
            </Link>
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
              Cart
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
