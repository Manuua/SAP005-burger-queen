import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";


import {Home} from "./pages/home/index"
import { Validation } from "./pages/validationPage/validation";
import {Cardapio} from "./pages/cardapio/cardapio";
import { Menu } from "./componentes/menu/menu"





export const App= ()=> {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={< Home/>} />
        <Route  path="/validation" element={<Validation />} /> 
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/menu" element={<Menu/>} />
     
      </Routes>
    </div>
  );
}