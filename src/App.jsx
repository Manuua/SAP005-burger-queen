import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Home} from "./pages/home/index"
import { Validation } from "./pages/validationPage/validation";


export const App= ()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validation" element={<Validation />} /> 
      </Routes>
    </div>
  );
}