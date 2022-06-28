
//import { NavLink } from "react-bootstrap";
//import logo from "../../imagens/logo.png";
//import React from 'react'
import'./Nav.css';
import React, {useState, useEffect} from 'react'




export function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])

    return (
      <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items">Inicio</li>
      <li className="items">Cardapio</li>
      <li className="items">Pedidos</li>
      <li className="items">Sair</li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
    )
  }
