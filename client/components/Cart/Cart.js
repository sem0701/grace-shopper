import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../../store";
import Confirmation from "./Confirmation";
import {
  addCart,
  decreaseQuantity,
  fetchCart,
  fulfillCart,
  increaseQuantity,
  removeCart,
} from "../../store/order";

import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { MdOutlineCancel } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.auth);
  const order = useSelector((state) => state.order) || { products: [] };
  const isLoggedIn = useSelector((state) => !!state.auth.id);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(me());
  }, []);

  useEffect(() => {
    dispatch(fetchCart(user.id));
  }, [user]);

  const handleClick = () => {
    if (isLoggedIn) {
      dispatch(fulfillCart(user.id));
      dispatch(addCart(user.id));
    } else {
      alert("Please login to complete your order");
    }
  };

  const handleIncreaseQuantity = (productId, orderId) => {
    dispatch(increaseQuantity(productId, user.id, orderId));
  };
  const handleDecreaseQuantity = (productId, orderId) => {
    dispatch(decreaseQuantity(productId, user.id, orderId));
  };
  const handleRemove = (productId, orderId) => {
    dispatch(removeCart(productId, user.id, orderId));
  };

  if (!order.products) {
    // alert("Your order has been confirmed!");
    // history.push("/products");
    return <Confirmation />;
  }

  return (
    <div className="cart">
      <h1>Your Cart:</h1>
      {
        <>
          {order.products.length < 1 ? (
            <>
              <h1>Your cart is empty!</h1>
            </>
          ) : (
            <div className="cart__products">
              {order.products.map((product) => {
                return (
                  <div key={product.id} className="cart__products-card">
                    <img src={product.imageURL} />
                    <div className="cart__products-card-info">
                      <div className="cart__products-card-infoL">
                        <h2>{product.name}</h2>
                        <div className="card-quantity">
                          <h3>{product.orderProduct.quantity}</h3>
                          <ButtonGroup
                            size="xs"
                            variant="outline"
                            isAttached
                            spacing="0"
                          >
                            <Button
                              onClick={() =>
                                handleIncreaseQuantity(product.id, order.id)
                              }
                            >
                              +
                            </Button>
                            <Button
                              onClick={() =>
                                handleDecreaseQuantity(product.id, order.id)
                              }
                            >
                              -
                            </Button>
                          </ButtonGroup>
                        </div>
                      </div>
                      <div className="cart__products-card-infoR">
                        {/* <Button
                          onClick={() => handleRemove(product.id, order.id)}
                        >
                          Delete
                        </Button> */}
                        <IconButton
                          colorScheme="red"
                          aria-label="Search database"
                          icon={<BsFillTrashFill />}
                          onClick={() => handleRemove(product.id, order.id)}
                        />
                        <h2>
                          ${product.price * product.orderProduct.quantity}
                        </h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <h2 className="cart__total">
            Total: $
            {order.products.reduce((acc, product) => {
              return (acc += product.price * product.orderProduct.quantity);
            }, 0)}
          </h2>
        </>
      }
      <div className="cart__checkout">
        <Button colorScheme="teal" onClick={handleClick}>
          CHECK OUT
        </Button>
      </div>
    </div>
  );
};

export default Cart;
