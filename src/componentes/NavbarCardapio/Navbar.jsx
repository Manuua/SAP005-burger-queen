import React from 'react'
import'./Nav.css';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  let navigate = useNavigate()

  function handleCardapio() {
    navigate("/cardapio"); //aqui você troca a rota
  }
  function handleMenu() {
    navigate("/menu")
  }
  function handleExit() {
    navigate("/")
  }

    return (
  <nav className='nav-cardapio'>
     <ul className="list">
      <li className="items" onClick={handleMenu}> Inicio </li>
      <li className="items" onClick={handleCardapio} >Cardapio </li>
      <li className="items" onClick={handleMenu}> Pedidos </li>
      <li className="items" onClick={handleExit}>Sair</li>
    </ul>  
  </nav>
    )
  }
