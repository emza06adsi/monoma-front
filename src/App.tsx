import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Pokemon } from "./components/pages/pokemon/Pokemon";
import Login from "./components/template/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export interface User {
  name?: string;
  email?: string;
}

function App() {
  const [user, setUser] = useState<User>();

  if (
    sessionStorage.getItem("token") === null ||
    sessionStorage.getItem("token") === ""
  ) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />;
          {/* <Route element={<Login setUser={setUser} />} />; */}
          <Route path="*" element={<Login setUser={setUser} />} />
          {/* <Route element={<Login setUser={setUser} />} />; */}
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />;
          <Route path="/grid" element={<Pokemon user={user} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
