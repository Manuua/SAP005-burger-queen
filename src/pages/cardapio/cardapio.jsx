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
  // setCart("banana")
  // frutas = "uva"
 }

  const onRemove = cartItem => {
    const remove = cart[cartItem.name]?.remove ? cart[cartItem.Name]?.remove -1 : [cartItem.Name] ;
    setCart({...cart,[cartItem.name] : {remove, price : cartItem.price} } )
  }
 
 //const [value,setTotalValue]=useState[cartItem.price]
  // const total = cartItem => {
  //   let value = cart[cartItem.price]?.total ? cart[cartItem.price]
  //   value = value + cartItem.price
  //   setTotalValue(value)
  // }
  const [menu,setMenu]= useState(dados);

  const menuElements = menu.map((Item) => (
    <CardCardapio 
    key={Item.id} 
    name={Item.name}
    price={Item.price} 
    onAdd = {onAdd}
    onRemove={onRemove}
    />
  ));

  localStorage.setCart("key","value")

 

  return (
  <>
  <div className="tituloCardapio"> 
    <img  src={titulocardapio} alt="titulo do cardápio"/>
    </div>
      <div className='containerCardapio'>
          <div className='carrinho'>
            <h1> Pedido </h1>
            
            {Object.keys(cart).map(itemCart => { 
              const item = itemCart 
              return (
                <>
                  <p className='namePedido'> {itemCart} Qt : {cart[item].count}<span className='pricePedido'> R${cart[item].price},00</span></p>
                 <h4>Total</h4>
                </>
              )
            }) }
        
            <input className="buttonCardapio"type="submit" value="Enviar "/>
          </div>
           <div className='renderItens'> 
               {" "}
              {menuElements}
           </div>
      </div>

</>
  )
}