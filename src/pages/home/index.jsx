import React, {useState, useEffect} from 'react'


import'./styles.css';
import '../../styles/global.css'
import logo from "../../imagens/logo.png";


function initialState(){
    return{user:'', password:''};
}

export function Home(){



    return (
<div className='containerPrincipal'>
<img className="logo" src={logo} alt="logo"/>

    <div className='container'>
 
<h2> Login </h2>
 <form action="">
    <div class="input-field"/>
        <input type="text" name="username" id="username" placeholder="Enter Your Username"/>
    <div class="underline"></div>
            
    <div class="input-field">
        <input type="password" name="password" id="password"  placeholder="Enter Your Password"/>
        <div class="underline"></div>
    </div>
     <input type="submit" value="Continue"/>
        </form>
        <a> </a>
    </div>
            
                    
               
            
        
    </div>

    )
  }
