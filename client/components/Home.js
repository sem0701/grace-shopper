import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../store/order";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

/**
 * COMPONENT
 *
 */

const Home = (props) => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.auth.username);
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCart(user.id));
  }, []);

  return (
    <div className="home">
      <div className="home__img home__img-1">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="home_pic"
        />
      </div>
      <div className="home__img home__img-2">
        <img src="home-dinner.jpg" alt="home_pic" />
      </div>

      <div className="home__content">
        <h1>Dine out in the comfort of your home</h1>
        <Link to="/products">
          <Button
            variant="outline"
            color={"white"}
            _hover={{ color: "black", bg: "white" }}
          >
            View Dishes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
