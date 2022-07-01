import './cardPedido.css';
import '../../styles/global.css'

export function CardPedido({pedido}){
 
//   function cleanLocalStorage() {
//    localStorage.removeItem("pedido")
//   }

// function cleanLocalStorage(index) {
//    localStorage.removeItem("pedido")
// }

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
            //onClick={cleanLocalStorage(0)}
            
         /> 
      </div>
    
  
   </>
    )
   }