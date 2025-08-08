import React from "react" ;
import ReactDOM from 'react-dom/client';
import {App} from "./App";
import "./Main.css"

const rootDOMRef = document.getElementById("root");
const root = ReactDOM.createRoot(rootDOMRef);

root.render(<App/>)