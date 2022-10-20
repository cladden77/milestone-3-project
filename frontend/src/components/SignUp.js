import React from "react";
import "../css/SignUp.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function SignUp() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/register", {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      setErr(res.data.msg);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  return (
    <body>
      <div className="wrapper login">
        <div className="container">
          <div className="login-form">
            <h1>Sign Up!</h1>
            <form onSubmit={registerSubmit}>
              <div className="input">
                <p>
                  <label>
                    Username<span>*</span>
                  </label>
                </p>
                <div>
                  <input
                    required
                    value={user.name}
                    onChange={onChangeInput}
                    type="text"
                    placeholder="Username"
                    autocomplete="on"
                  />
                </div>
              </div>

              <div className="input">
                <p>
                  <label>Email</label>
                </p>
                <div>
                  <input
                    type="email"
                    placeholder="Email Adress"
                    autocomplete="off"
                    required
                    value={user.email}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="input">
                <p>
                  <label>
                    Password<span>*</span>
                  </label>
                </p>
                <div>
                  <p>
                    <input
                      type="password"
                      placeholder="Password"
                      autocomplete="off"
                      required
                      value={user.password}
                      onChange={onChangeInput}
                    />
                  </p>
                </div>
              </div>
              <div className="input">
                <p>
                  <label>
                    Confirm Password<span>*</span>
                  </label>
                </p>
                <div>
                  <p>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      autocomplete="off"
                    />
                  </p>
                </div>
              </div>
              <div className="input">
                <p>
                  <label>
                    Birthdate<span>*</span>
                  </label>
                </p>
                <div>
                  <p>
                    <input type="date" autocomplete="off" />
                  </p>
                </div>
              </div>
              <div className="submit">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

export default SignUp;
