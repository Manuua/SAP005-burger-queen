import React, {useState, useEffect} from 'react'
import'./validation.css';
import '../../styles/global.css';
import logo from "../../imagens/logo.png";


 export function Validation(){

     return (
    <div className='validationContainer'>     
    
        <img className="logo" src={logo} alt="logo"/>
        <div className='container'>
         
         <h1> Cadastre-se </h1>

    <form action="">
        <div class="input-field">
            <input type="text" name="email" id="username" placeholder="Enter Your Email"/>
        <div class="input-field"/>
            <input type="password" name="password" id="password" placeholder="Enter Your Password"/>
        <div class="input-field"/>
            <input type="password" name="password" id="password" placeholder="Confirm Your Password"/>
        <div class="input-field"/>
            <input type="textarea" name="city" id="city" placeholder="Enter your City"/>
            <div class="underline"/>
        </div>   
            <input type="submit" value="Continue"/>
           
    </form>   
        </div> 
    </div> 
        
     )
 }