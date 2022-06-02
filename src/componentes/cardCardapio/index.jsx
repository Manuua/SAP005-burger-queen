import './style.css';
import '../../styles/global.css'


export function CardCardapio(props){
  
 return (
 <>

<div className='cardCardapio' >
         <strong >{props.name}</strong>
         <strong > {props.price} </strong>

    <div class="input-group">
        <input type="button" value="-" class="button-minus" data-field="quantity"/>
        <input type="number" step="1" max="" value="1" name="quantity" class="quantity-field"/>
        <input type="button" value="+" class="button-plus" data-field="quantity"/>
    </div>
</div>
     
</>
 )
}