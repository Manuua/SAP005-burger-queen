import React, {useState, useEffect} from 'react'
import'./menu.css';
import '../../styles/global.css'
import logo from "../../imagens/logo.png";
import { CardPedido } from '../cardPedido/cardPerdido';
import { Cardapio } from '../../pages/cardapio/cardapio';

export function Menu() {
//     export function useLocalStorage(key , initialValue){
//        const [storedValue, setStoredValue]= useState( ()=> {
//            try {
//                const item = window.localStorage.getItem(key)
//                return item ? JSON.parse(item): initialValue
//            }catch (error){
//                return initialValue
//            }
//        })
       
//     const setValue = value =>  {
//         try {
//             setStoredValue(value)
//             window,localStorage.setItem(key , JSON.stringify(value))
//           }catch (error){
//             console.alert(error)
//           }

//        return[storedValue, setValue]
// }

const pedidosCozinha = JSON.parse(localStorage.getItem("pedido"))
const [pedidoFromLocalStorage, setPedido ]= useState(pedidosCozinha) 



  return(      
<>
  
<div className='container-menu'> 

    <nav>

    <label className="logo-nav-bar">  <img className="logoMenu" src={logo} alt="logo"/>  </label>
        <ul>
       
            <li><a  className='link-Menu' href="#">Início </a></li>
            <li><a href="#">Cardápio </a></li>
            <li><a href="#">Pedidos Prontos </a></li>
            <li><a href="#">Sair </a></li>
        </ul>
    </nav>
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
    
</div>

 </>
  )  
}