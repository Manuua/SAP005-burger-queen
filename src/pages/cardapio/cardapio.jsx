import React, {useState, useEffect} from 'react'
import'./cardapio.css';
import '../../styles/global.css'
import '../dados'
import { CardCardapio } from '../../componentes/cardCardapio';
import titulocardapio from "../../imagens/titulocardapio.png"
import { cardapioItens } from '../dados';

export function Cardapio() {
 
    return(
  <>
  <div className="tituloCardapio" > <img  src={titulocardapio} alt="titulo do cardápio"/> </div>
  <div>
  <CardCardapio  />
  </div>
   
  </>
    )
  //  const [cardapioName, cardapioPrice] = useState();


    
  
}