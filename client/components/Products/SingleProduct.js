import React, { useEffect, useState } from "react";
import { fetchSingleProduct } from "../../store/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../../store";
import { addCart, addToCart } from "../../store/order";

const SingleProduct = (props) => {
  const [state, setState] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const order = useSelector((state) => state.order);

  const product =
    useSelector((state) => {
      return state.product;
    }) || [];

  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
  }, []);

  console.log(`user.id: ${user.id}`);

  const handleClick = () => {
    console.log(`the state is: ${state}`);
    dispatch(addToCart(user.id, props.match.params.id, state));
  };

  const handleChange = (evt) => {
    setState(evt.target.value);
  };

  return (
    <div>
      {/* change the width and height in SCSS later */}
      <img src={product.imageURL} width="300" height="300" />
      <ul>
        <li>{product.name}</li>
        <li>{product.description}</li>
        <li>{product.price}</li>
        <li>{product.calories}</li>
      </ul>
      <form id="quantity-form">
        <label>Quantity:</label>
        <input
          name="quantity"
          type="number"
          value={state}
          onChange={handleChange}
        />
      </form>
      <button onClick={() => handleClick()}>Add To Cart</button>
    </div>
  );
};

export default SingleProduct;
