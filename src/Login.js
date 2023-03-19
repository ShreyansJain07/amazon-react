import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {auth} from "./firebase"
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) =>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .then(auth => {
          if(auth) navigate("/")
          .cath(error => alert(error.message))
      })

  }
  const register = (e) =>{
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email,password)
      .then(auth => {
          if(auth) navigate("/")
      })
      .catch(error => alert(error.message))
  }
  return (
    <div className="login">
      <Link>
        <img
          className="login__logo"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} className="login__signIn">Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__reg">Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
