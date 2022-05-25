import React, {useState, useEffect} from 'react'
import'./styles.css';
import '../../styles/global.css'
import logo from "../../imagens/logo.png";

export function Home(){

    return (

<div className='container'> 

<img src={logo.png} alt="logo"/>
  <h1> Burguer Queen</h1>

<div className='email'>
    <label for="email">E-mail</label>
    <input  className ="input-email"type="email" onblur="validacaoEmail(f1.email)" />
</div>
<div className='password'>
    <label for="password">Password (8 characters minimum):</label>
    <input className='input-password'type="password" id="pass" name="password"  minlength="8" required />
</div>

    <button  className='button-enter' type='submit' id='validate'>Entrar</button>


</div>
    )
}