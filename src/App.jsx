import React from "react" ;
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { FirstSection } from "./components/FirstSection/FirstSection";
import "./App.css"
function App() {
  return (
    <div className="App">
        <FirstSection/>
    </div>
  );
}

export default App

