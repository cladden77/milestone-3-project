import "../CSS/Login.css";
import password_hide from "../Images/password-hide.png";
import password_show from "../Images/password-show.png";
import { useState, useEffect } from "react";
import axios from "../api/Axios";

const Login = ({ setIsLogin }) => {
  const [passwordView, setPasswordView] = useState(false);

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      localStorage.setItem("tokenStore", res.data.token);
      setIsLogin(true);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  const changeView = () => {
    setPasswordView(!passwordView);
  };

  useEffect(() => {}, [passwordView]);

  return (
    <body>
      <div className="wrapper login">
        <h1 className="title">
          Soft<span>Notes</span>
        </h1>
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
              <form onSubmit={loginSubmit}>
                <p>
                  <label>
                    Username/Email address<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username or Email"
                    required
                    defaultValue={user.email}
                    onChange={onChangeInput}
                  />
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
                      defaultValue={user.password}
                      onChange={onChangeInput}
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
                <h3>{err}</h3>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
