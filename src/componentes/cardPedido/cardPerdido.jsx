import './style.css';
import '../../styles/global.css'

export function CardPedido(props){
  
    return (
    <>
   
    <div className='cardPedido' >
            <strong > {props.name}</strong>
            <strong > preço : R$ {props.price} </strong>
            <strong > total </strong>
       
    </div>
        
   </>
    )
   }