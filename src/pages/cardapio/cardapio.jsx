import React, {useState, useEffect} from 'react'
import'./cardapio.css';
import '../../styles/global.css'
import '../../componentes/dadosCardapio/dados'
import { CardCardapio } from '../../componentes/cardCardapio';
import titulocardapio from "../../imagens/titulocardapio.png";
import { cardapioItens } from '../../componentes/dadosCardapio/dados';
import { render } from 'react-dom';

export function Cardapio(){
  const itens = cardapioItens;
  const cardapioFinal = itens.map(n => <CardCardapio
  key={itens.id} 
  name={itens.name}
  price={itens.price}
  />  )

    return(
   
  <>
  
  <div className="tituloCardapio" > <img  src={titulocardapio} alt="titulo do cardápio"/> </div>
  <div> {cardapioFinal}</div>
   
  </>
    )
  //  const [cardapioName, cardapioPrice] = useState();


    
  
}