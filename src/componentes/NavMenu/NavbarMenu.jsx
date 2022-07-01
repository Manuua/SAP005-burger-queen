import React from 'react'
import'./Nav.css';
import logo from "../../imagens/logo.png";
import { useNavigate } from 'react-router-dom';

export function NavbarMenu() {

  let navigate = useNavigate();; // aqui você importa pra poder usar o react-router

  function handleCardapio() {
    navigate("/cardapio"); //aqui você troca a rota
  }
  function handleMenu() {
    navigate("/menu")
  }
  function handleExit() {
    navigate("/")
  }
  function  handleWelcome() {
    navigate("/welcome")
  }

    return (
        <div className='container-menu'> 

    

        <label className="logo-nav-bar">  <img className="logoMenu" src={logo} alt="logo"/>  </label>
          <div className='menu'> 
            <nav className='menu-nav'>
            <ul>
           
                <li onClick={handleWelcome}>Início </li>
                <li onClick={handleCardapio}> Cardápio </li>
                <li onClick={handleMenu}>Pedidos </li>
                <li onClick={handleExit} > SAIR </li>
            </ul>
        </nav>
        </div>
        </div>
    )
  }