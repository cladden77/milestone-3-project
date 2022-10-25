import React, { useEffect } from "react";
import axios from "axios";

function Logout() {
  const logOut = () => {
    axios
      .get("http://localhost:3001/user/logout", { withCredentials: true })
      .then(
        (window.location.href = "/login"),
        console.log("I logged Out").catch((error) => {
          console.log(error);
        })
      );
  };
  return <button onClick={logOut}>Logout</button>;
}

export default Logout;
