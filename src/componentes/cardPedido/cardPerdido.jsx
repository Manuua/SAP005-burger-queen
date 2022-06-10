import './cardPedido.css';
import '../../styles/global.css'

export function CardPedido(props){
  
    return (
    <>
   
   <div className='carrinhoMenu'>
            <h1> Pedido </h1>
                <>
                  <p className='namePedido'><span> </span></p>
                 <h4>Total</h4>
                </>
              
        
        
            <input className="buttonCardapio"
            type="submit" 
            value="Enviar " 
            onClick={e => setLocalStorage(e.target.value)}
            />
        
          </div>
    {/* <div className='cardPedido' >
            <strong > {props.name}</strong>
            <strong > preço : R$ {props.price} </strong>
            <strong > total </strong>
            <strong> {props.time}</strong>
       
    </div> */}
        
   </>
    )
   }