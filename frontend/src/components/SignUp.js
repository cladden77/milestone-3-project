import "../css/SignUp.css";

function SignUp() {
  return (
    <body>
      <div className="wrapper login">
        <div className="container">
          <div className="login-form">
            <h1>Sign Up!</h1>
            <form>
              <div className="input">
                <p>
                  <label>
                    Username<span>*</span>
                  </label>
                </p>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    autocomplete="off"
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
