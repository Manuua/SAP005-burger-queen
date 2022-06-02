import React, {useState, useEffect} from 'react'
import'./menu.css';
import '../../styles/global.css'
import logo from "../../imagens/logo.png";

export function Menu() {
    return (
        
<>
  
<div className='container-menu'> 

    <nav>

    <label className="logo-nav-bar">  <img className="logoMenu" src={logo} alt="logo"/>  </label>
        <ul>
       
            <li><a  className='link-Menu' href="#">Início </a></li>
            <li><a href="#">Cardápio </a></li>
            <li><a href="#">Pedidos</a></li>
            <li><a href="#">Sair </a></li>
        </ul>
    </nav>
</div>
 </>
    )
}