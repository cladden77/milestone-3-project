import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Notes from "./components/Notes";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      {isLogin ? <Notes /> : <Login />}
      <SignUp />
    </div>
  );
}

export default App;
