import React, { useEffect, useState } from "react";
import { setProducts } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Text } from "@chakra-ui/react";

const AllProducts = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const products =
    useSelector((state) => {
      return state.products;
    }) || [];

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  const navigateToProduct = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="products">
      {products === undefined || products === []
        ? "Loading..."
        : products.map((product) => {
            return (
              <div
                className="products__card"
                key={product.id}
                role="button"
                onClick={() => navigateToProduct(product.id)}
              >
                <img src={product.imageURL} className="products__card-img" />
                <Text fontSize="2xl">{product.name}</Text>
                <Text fontSize="md" className="products__card-description">
                  {product.description}
                </Text>
              </div>
            );
          })}
    </div>
  );
};

export default AllProducts;
