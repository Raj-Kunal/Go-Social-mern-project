import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  let navigate = useNavigate();

  const handlSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Password don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              type="email"
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              minLength={6}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              ref={confirmPassword}
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
