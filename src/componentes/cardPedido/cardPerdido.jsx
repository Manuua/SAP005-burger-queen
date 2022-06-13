import './cardPedido.css';
import '../../styles/global.css'

export function CardPedido(props){
  const {cartItems, onAdd, onRemove}= props;
  function  pedidosCozinha() {
    return JSON.parse(localStorage.getItem("pedido"))
   
   }
    return (
    <>
   
   <div className='carrinhoMenu'>
        <h1> Pedido </h1>
          <>
            <p className='namePedido'><span> </span></p>
          </>       
        
      {
         Object.keys(JSON.parse(localStorage.getItem("pedido"))).map( pedido => {
           return( 
             <>
             <div>
             <p> {pedido.price}</p> 
             <p> {pedido.time}</p> 
             </div>
             
             <p> {JSON.stringify(JSON.parse(localStorage.getItem("pedido"))[pedido])} </p> 
           </>
           )
          
         })    
     } 
      </div>
    
        
   </>
    )
   }