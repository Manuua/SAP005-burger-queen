import React, {useState, useEffect} from 'react'
import'./menu.css';
import '../../styles/global.css'
import { CardPedido } from '../../componentes/cardPedido/cardPerdido';
import { NavbarMenu } from '../../componentes/NavMenu/NavbarMenu';
import {Footer} from '../../componentes/footer/footer'

export function Menu() {
const pedidosCozinha = JSON.parse(localStorage.getItem("pedido"))
const [pedidoFromLocalStorage, setPedido ]= useState(pedidosCozinha)


  return(      
<>
  <NavbarMenu /> 

  <h2 className='meus-pedidos'> Lista de pedidos</h2>
  <div> 
    {
      pedidoFromLocalStorage.map((pedido, index) => ( 
         <CardPedido
         pedido={pedido}
         key={index}
         /> 
      ))  
    }  
  </div>  
  <div className='footer'> 
     <Footer /> 
     </div>
</>
  )  
}