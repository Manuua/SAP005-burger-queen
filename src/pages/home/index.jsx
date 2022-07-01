import React, { useState } from 'react';
import'./styles.css';
import '../../styles/global.css'
import logo from "../../imagens/logo.png";
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { useCookies } from 'react-cookie';
//import {PrivateRoute} from '../../componentes/Routes/private'


export function Home(){
    // const [name, setName] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [cookies, setCookie] = useCookies(['user']);

    // const handle = () => {
    //     setCookie('Name', name, { path: '/' });
    //     setCookie('Password', pwd, { path: '/' });
    //  };

// validation API 
    const handleSubmit = values => {
        
        axios.post('http://localhost:8080/v1/api/auth', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                    navigate('/menu')
                }
            })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

// Routes 
let navigate = useNavigate()
    function handleValidation(){
        navigate("/validation")
    }

    return (
        <> 
<div className='containerPrincipal'>
<img className="logo" src={logo} alt="logo"/>

    <div className='container'>
 
<h2> Login </h2>
<Formik
    
     initialValues={{}}
     onSubmit={handleSubmit}
     validationSchema= {validations}

  >
 <Form >
 
    <div class="input-field"/>
        <Field
        //  value={name}
          name="email" 
          id="email" 
          placeholder="Enter Your email" 
        //  onChange={(e) => setName(e.target.value)}
          />
     <ErrorMessage
        component="span"
        name="email"
        className="Login-Error"
        />

    <div class="underline"></div>
            
    <div class="input-field">
        <Field  
        //value={pwd}
        type="password"
        name="password" 
        id="password"  
        placeholder="Enter Your Password"
       // onChange={(e) => setPwd(e.target.value)}
        />

       <ErrorMessage
        component="span"
        name="password"
        className="Login-Error"
        />  

     <div class="underline"></div>
    </div>
     <input type="submit" /> 
     
    </Form>
   
    </Formik>
    <div className='question'> 
    <a className='question-validation' onClick={handleValidation}> Não tem conta ? Cadrastre-se </a>  
    </div>
    </div>     
        
    </div>
    </>
    )
  }
