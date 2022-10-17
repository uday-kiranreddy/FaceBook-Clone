import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./SatateProvider";
import { actionTypes } from "./reducer";
function Login() {
const [state,dispatch]=useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
        })
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688__340.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/387/926/png-transparent-facebook-logo-computer-icons-poster-background-blue-angle-text.png"
          alt=""
        />
        <Button className="button" type="submit" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
