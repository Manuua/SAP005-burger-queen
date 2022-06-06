import React, {useState, useEffect} from 'react'
import'./cardapio.css';
import '../../styles/global.css'
import '../../componentes/dadosCardapio/dados'
import { CardCardapio } from '../../componentes/cardCardapio/cardCardapio';
import titulocardapio from "../../imagens/titulocardapio.png";
import { render } from 'react-dom';
import dados from '../../componentes/dadosCardapio/dados';



export function Cardapio(){
  const [cart, setCart] = useState({})

  const onAdd = cartItem => {
  const count = cart[cartItem.name]?.count ? cart[cartItem.name]?.count +1 : 1;
  setCart({...cart,[cartItem.name] : {count, price : cartItem.price} } ) 
 }



  const [menu,setMenu]= useState(dados);

  const menuElements = menu.map((Item) => (
    <CardCardapio 
    key={Item.id} 
    name={Item.name}
    price={Item.price} 
    onAdd = {onAdd}
    />
  ));

  return (
  <>
  <div className="tituloCardapio"> 
    <img  src={titulocardapio} alt="titulo do cardápio"/>
  </div>
  <div className='containerCardapio'>
          <div className='carrinho'>
            <h1> Pedido </h1>
            
            <input type="submit" value="Continue"/>
          </div>
           <div className='renderItens'> 
               {" "}
              {menuElements}
           </div>
      </div>

</>
  )
}