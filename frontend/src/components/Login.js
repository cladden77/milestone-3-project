import React from "react";
import "../css/Login.css";
import password_hide from "../Images/password-hide.png";
import password_show from "../Images/password-show.png";
import { useState, useEffect, useRef } from "react";

const Login = () => {
  const [passwordView, setPasswordView] = useState(false);

  const changeView = () => {
    setPasswordView(!passwordView);
  };

  useEffect(() => {}, [passwordView]);

  return (
    <body>
      <div className="wrapper login">
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h2>Welcome!</h2>
              <p>
                Create your account.
                <br />
                For Free!
              </p>
              <a href="https://google.com" className="btn">
                Sign Up
              </a>
            </div>
          </div>

          <div className="col-right">
            <div className="login-form">
              <h2>Login</h2>
              <form>
                <p>
                  <label>
                    Username/Email address<span>*</span>
                  </label>
                  <input type="text" placeholder="Username or Email" required />
                </p>
                <p>
                  <label>
                    Password<span>*</span>
                  </label>
                  <div id="password">
                    <input
                      type={passwordView ? "text" : "password"}
                      placeholder="Password"
                      required
                    />
                    <img
                      onClick={changeView}
                      src={passwordView ? password_hide : password_show}
                    />
                  </div>
                </p>
                <p>
                  <input type="submit" value="Sign In" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
