import "../CSS/SignUp.css";
import password_hide from "../Images/password-hide.png";
import password_show from "../Images/password-show.png";
import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Animation.css";

function SignUp(props) {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const [passwordView, setPasswordView] = useState(false);
  const [confirmPasswordView, setConfirmPasswordView] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const [passwordConfirm, setPasswordConfirm] = useState("");

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

  const changeView = () => {
    setPasswordView(!passwordView);
  };
  const changeConfirmView = () => {
    setConfirmPasswordView(!confirmPasswordView);
  };

  useEffect(() => {
    if (passwordConfirm !== user.password) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [passwordConfirm, user.password]);

  return (
    <div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="wrapper login">
        <div className="SignUpWrapper SignUp">
          <div className="SignUpContainer">
            <div className="SignUp-form">
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
                      type="text"
                      name="name"
                      id="register-name"
                      placeholder="Username"
                      required
                      value={user.name}
                      onChange={onChangeInput}
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
                      name="email"
                      id="register-email"
                      placeholder="Email"
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
                  <div id="password">
                    <input
                      type={passwordView ? "text" : "password"}
                      name="password"
                      id="register-password"
                      placeholder="Password"
                      required
                      value={user.password}
                      autoComplete="true"
                      onChange={onChangeInput}
                    />
                    <img
                      alt="password show"
                      onClick={changeView}
                      src={passwordView ? password_hide : password_show}
                    />
                  </div>
                </div>
                <div className="input">
                  <p>
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                  </p>
                  <div id="password">
                    <input
                      type={confirmPasswordView ? "text" : "password"}
                      name="password"
                      id="register-password"
                      placeholder="Password"
                      required
                      autoComplete="true"
                      onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                      }}
                    />
                    <img
                      alt="password show"
                      onClick={changeConfirmView}
                      src={confirmPasswordView ? password_hide : password_show}
                    />
                  </div>
                  {isDisabled && (
                    <p className="test">
                      Please make sure your passwords are the same
                    </p>
                  )}
                </div>
                <label className="back-to-login">
                  <a href="/">Have an account? Login Now</a>
                </label>
                <div className="submit">
                  <input type="submit" value="Submit" disabled={isDisabled} />
                </div>
                <h3>{err}</h3>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
