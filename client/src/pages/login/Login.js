import React, { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handlSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  // console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Go Social</h3>
          <span className="loginDesc">
            Lorem Lorem ipsum dolor sit amet. ipsum, dolor sit amet consectetur
            adipisicing.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handlSubmit}>
            <input
              type="email"
              required
              placeholder="Email"
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              required
              minLength={6}
              placeholder="Password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgotButton">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                " Create a new account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
