import React, {useState, useEffect} from 'react'
import'./menu.css';
import '../../styles/global.css'
import logo from "../../imagens/logo.png";
import { CardPedido } from '../cardPedido/cardPerdido';
//import {PrivateRoute} from '../Routes/private'

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

 //onClick() {redirect("/cardapio")}


const pedidosCozinha = JSON.parse(localStorage.getItem("pedido"))
const [pedidoFromLocalStorage, setPedido ]= useState(pedidosCozinha) 


  return(      
<>
  
{/* <div className='container-menu'>  */}
<div className='container-menu'> 

    

    <label className="logo-nav-bar">  <img className="logoMenu" src={logo} alt="logo"/>  </label>
      <div className='menu'> 
        <nav className='menu-nav'>
        <ul>
       
            <li><a  className='link-Menu' href="#" >Início </a></li>
            <li><a href="#">Cardápio </a></li>
            <li><a href="#">Pedidos Prontos </a></li>
            <li><a href="#">Sair </a></li>
        </ul>
    </nav>
    </div>
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