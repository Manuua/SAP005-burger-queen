import './style.css';
import '../../styles/global.css'


export function CardCardapio(props){
 return (
 <>

     <div className='cardCardapio' >
         <strong >{props.categoria}</strong>
         <strong >{props.name}</strong>
         <strong > {props.price} </strong>
     </div>
</>
 )
}