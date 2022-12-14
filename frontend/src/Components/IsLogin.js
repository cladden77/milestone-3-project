import React, { useEffect, useState } from "react";
import axios from "axios";
// import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

function IsLogin() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    console.log("Hitting it");
    const checkLogin = async () => {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const verified = await axios.get("/users/verify", {
          headers: { Authorization: token },
        });
        console.log(verified);
        setIsLogin(verified.data);
        if (verified.data === false) return localStorage.clear();
      } else {
        setIsLogin(false);
      }
    };
    checkLogin();
  }, [isLogin]);

  // const [onLogin, setOnLogin] = useState(false)
  // const style = {
  //   visibility: onLogin ? "visible" : "hidden",
  //   opacity: onLogin ? 1 : 0
  // }

  return (
    <div>
      {/* {console.log(isLogin)} */}
      {isLogin ? (
        <Home setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
      {/* <Login /> */}
      {/* {<SignUp setIsLogin={setIsLogin} />} */}
    </div>
  );
}

export default IsLogin;
