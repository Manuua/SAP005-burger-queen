import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";


import {Home} from "./pages/home/index"
import { Validation } from "./pages/validationPage/validation";
import {Cardapio} from "./pages/cardapio/cardapio";
import { Menu } from "./pages/menu/menu"

// const Private = ({Item}) => {
//   const signed = false;

// return signed > 0 ? <Item /> : <Validation />;
// }

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