import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
