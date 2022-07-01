import React, {useState, useEffect} from 'react'
//import'./menu.css';
import '../../styles/global.css'
import { NavbarMenu } from '../../componentes/NavMenu/NavbarMenu';
import welcome from '../../imagens/welcome.png'
import burguer from '../../imagens/burguer.png'
import './welcome.css'
import {Footer} from '../../componentes/footer/footer'

export function Welcome() {
    
    
    
      return(      
    <>
      <NavbarMenu /> 
      
      <div className='logo-welcome'> <img className="welcome" src={welcome} alt="imagem hamburguer e batata"/> </div>

    
     <div className='conteudo'> </div>
 
      <div className='container-about'>  <img className="about" src={burguer} alt="sobre restaurante" /></div>
    
 
     <div className='footer'> 
     <Footer /> 
     </div>
    
    </>
    
      )  
    }