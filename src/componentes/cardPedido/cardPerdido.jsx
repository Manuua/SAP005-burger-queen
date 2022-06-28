import './cardPedido.css';
import '../../styles/global.css'

export function CardPedido({pedido}){
 console.log(pedido)
  
    return (
    <>
   
   <div className='carrinhoMenu'>
        <h1> Pedido </h1> 
     
      {
        Object.keys(pedido).map(itemPedido => {
         
           return( 
             <>
             <div>
              <p>Item : {itemPedido}</p> 
              <p>R$ {(pedido[itemPedido].price)}</p> 
              </div>


           </>
           )
          
         
        })   
     } 
       <input className="buttonCardapio"
            type="submit"
            
         /> 
      </div>
    
  
   </>
    )
   }