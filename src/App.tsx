import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Pokemon } from "./components/pages/pokemon/Pokemon";
import Login from "./components/template/login/login";

function App() {
  return (
    <div>
      <Login></Login>

      {/* <Pokemon></Pokemon> */}
    </div>
  );
}

export default App;
