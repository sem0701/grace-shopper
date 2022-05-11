import React, { useEffect, useState } from "react";
import { fetchSingleProduct } from "../../store/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../../store";
import { addCart, addToCart } from "../../store/order";
import {
  Heading,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const SingleProduct = (props) => {
  const [state, setState] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const product =
    useSelector((state) => {
      return state.product;
    }) || [];

  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
  }, []);

  const handleClick = () => {
    dispatch(addToCart(user.id, product, state));
    alert("Product added to cart!");
  };

  const handleChange = (evt) => {
    setState(evt.target.value);
  };

  return (
    <div className="product">
      <div className="product__img">
        <img src={product.imageURL} width="300" height="300" />
      </div>

      <div className="product__right">
        <div className="product__details">
          <div className="product__details-top">
            <Heading className="product__details-title">{product.name}</Heading>
            <p className="product__details-desc">{product.description}</p>
          </div>
          <div className="product__details-info">
            <p className="product__details-price">
              <strong>Price: </strong>$ {product.price}
            </p>
            <p className="product__details-calories">
              <strong>Calories: </strong>
              {product.calories}
            </p>
          </div>

          <div className="product__details-order">
            <div className="product__details-quantity">
              <h3>Quantity:</h3>
              <Input
                name="quantity"
                type="number"
                value={state}
                onChange={handleChange}
                min="1"
                max="10"
                htmlSize={4}
                width="auto"
              />
            </div>
            <Button
              colorScheme="teal"
              className="btn"
              onClick={() => handleClick()}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
