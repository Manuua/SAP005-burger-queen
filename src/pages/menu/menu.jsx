import React, {useState, useEffect} from 'react'
import'./menu.css';
import '../../styles/global.css'
import { CardPedido } from '../../componentes/cardPedido/cardPerdido';
import { NavbarMenu } from '../../componentes/NavMenu/NavbarMenu';


export function Menu() {
const pedidosCozinha = JSON.parse(localStorage.getItem("pedido"))
const [pedidoFromLocalStorage, setPedido ]= useState(pedidosCozinha)


  return(      
<>
  <NavbarMenu /> 
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
</>
  )  
}