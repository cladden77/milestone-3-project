import React from "react";
import "../CSS/Nav.css";
// import { Link } from "react-router-dom";
import upArrow from "../Images/up-arrow.png";
import downArrow from "../Images/down-arrow.png";
import Logout from "./Logout";
import Github from "../Images/github.PNG";

function Nav(props) {
  const changeTheme = () => {
    if (props.colorTheme === "LightMode") {
      props.setColorTheme("DarkMode");
    } else {
      props.setColorTheme("LightMode");
      console.log(props.colorTheme);
    }
  };

  return (
    <nav id={`${props.colorTheme}`} className={`nav`}>
      {/* <a id="top"></a> */}
      <a className="topButton" href="#top">
        <img alt="button to top" src={upArrow} />
      </a>
      <a className="bottomButton" href="#bottom">
        <img alt="button to bottom" src={downArrow} />
      </a>
      <h1>
        Soft<span>Notes</span>
      </h1>
      <div class="container">
        <label class="box">
          <input type="checkbox" onChange={changeTheme} />
          <span class="slider round"></span>
        </label>
      </div>
      <a href="https://github.com/cladden77/milestone-3-project">
        <img src={Github} alt="link to Github" />
      </a>
      <p className="logout">
        <Logout />
      </p>
      {/* <p>Sort</p> */}
    </nav>
  );
}

export default Nav;
