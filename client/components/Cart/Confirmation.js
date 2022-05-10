import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="confirmation">
      <h1>Your order has been confirmed!</h1>
      <Link to="/products">
        <Button colorScheme="teal">Go to products</Button>
      </Link>
    </div>
  );
};

export default Confirmation;
