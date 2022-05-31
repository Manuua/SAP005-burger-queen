import React, {useState, useEffect} from 'react'
import'./validation.css';
import '../../styles/global.css';
import logo from "../../imagens/logo.png";


 export function Validation(){

 

     return (
         <div className='validationContainer'> 
    
        <img className="logo" src={logo} alt="logo"/>
        <h1>Cadastre-se </h1>
    <div className='input'> 
        <div className='NameValidation'> 
           <label for="name">Nome Completo</label>
            <input type="text"/>
        </div>
    
        <div className='emailValidation'>
            <label for="email">email </label>
            <input type="email"/>
        </div>
        <div className='cityValidation'>
            <label for="cidade"> Cidade </label>
            <input type="text"/>
        </div>
        <div className='senhaValidation'>
            <label for="senha"> Senha </label>
            <input type="password"/>
        </div>
     
        <div className='senhaValidation2'>
            <label for="senha"> Repetir Senha</label>
            <input type="password"/>
        </div>
    </div>

        <button className='buttonValidation'> Cadastrar </button>
        
        </div> 
        
        
     )
 }