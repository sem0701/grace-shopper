import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../store";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";

/**
 * COMPONENT
 */
const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate(username, password, formName));
  };

  return (
    <div className="auth">
      <div className="auth__pic">
        <img src="auth-pic.avif" alt="auth_pic" />
      </div>
      <div className="auth__form-container">
        <div className="auth__form">
          <div className="auth__form-title">
            <Heading>{`${displayName}:`}</Heading>
          </div>

          <form
            className="auth__form-content"
            onSubmit={handleSubmit}
            name={name}
          >
            <div>
              <label htmlFor="username">
                <small>Username</small>
              </label>
              <Input name="username" size="lg" type="text" />
            </div>
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <Input name="password" size="lg" type="password" />
            </div>
            <div>
              <Button type="submit" colorScheme="teal">
                {displayName}
              </Button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export const Login = <AuthForm name="login" displayName="Login" />;
export const Signup = <AuthForm name="signup" displayName="Sign Up" />;
