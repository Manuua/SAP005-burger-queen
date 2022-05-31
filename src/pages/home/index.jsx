import React, {useState, useEffect} from 'react'
import'./styles.css';
import '../../styles/global.css'
import logo from "../../imagens/logo.png";

export function Home(){

    return (

<div className='container'> 
<img className="logo" src={logo} alt="logo"/>
  <h1> Entrar </h1>

<div className='email'>
    <label for="email">E-mail</label>
    <input  className ="input-email"type="email" onblur="validacaoEmail(f1.email)" />
</div>

<div className='password'>
    <label for="password">senha (8 caractéres minimo):</label>
    <input className='input-password'type="password" id="pass" name="password"  minlength="8" required />
</div>
 
    <button  className='button-enter' type='submit' id='validate'>Entrar</button>
 
<div>
    <a href="#"> Novo por aqui ? Faça Seu cadastro</a>
</div>

<footer >  
    <p>Desenvolvido por Manoela Araújo</p>
</footer>
</div>
    )
}