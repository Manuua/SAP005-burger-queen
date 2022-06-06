import './style.css';
import '../../styles/global.css'


export function CardCardapio(props){
  
 return (
 <>

<div className='cardCardapio' >
         <strong > {props.name}</strong>
         <strong > preço : R$ {props.price} </strong>

    <div class="input-group">
        <input type="button" value="+" class="button-plus" data-field="quantity" onClick={() => props.onAdd({name: props.name, price: props.price})} />
    </div>
</div>
     
</>
 )
}