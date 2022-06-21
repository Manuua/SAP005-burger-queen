import './cardPedido.css';
import '../../styles/global.css'

export function CardPedido({pedido}){
 console.log(pedido)
  
    return (
    <>
   
   <div className='carrinhoMenu'>
        <h1> Pedido </h1>
          <>
            <p className='namePedido'><span> </span></p>
          </>       
        
      {
        Object.keys(pedido).map(itemPedido => {
         
           return( 
             <>
             <div>
              <p> {itemPedido}</p> 
              <p> {(pedido[itemPedido].price)}</p> 
             </div>
             
           </>
           )
          
         
        })   
     } 
     
      </div>
    
        
   </>
    )
   }