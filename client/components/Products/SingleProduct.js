import React, { useEffect, useState } from "react";
import { fetchSingleProduct } from "../../store/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../../store";
import { addCart, addToCart } from "../../store/order";

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
  };

  const handleChange = (evt) => {
    setState(evt.target.value);
  };

  return (
    <div id="container">
      <div className="product-details">
        <h1>{product.name}</h1>

        <p className="information">{product.description}</p>

        <div className="control">
          <h3>Quantity:</h3>
          <input
            name="quantity"
            type="number"
            value={state}
            onChange={handleChange}
            min="1"
            max="10"
          />
          <br></br>
          <br></br>
          <button className="btn" onClick={() => handleClick()}>
            <span className="price">$ {product.price}</span>
            <span className="shopping-cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span className="buy">Add To Cart</span>
          </button>
        </div>
      </div>

      <div className="product-image">
        <img src={product.imageURL} width="300" height="300" />

        <div className="info">
          <h2> Description</h2>
          <ul>
            <li>
              <strong>Price : </strong>$ {product.price}
            </li>
            <li>
              <strong>Calories : </strong>
              {product.calories}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
