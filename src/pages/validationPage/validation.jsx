import React, {useState, useEffect} from 'react'
import'./validation.css';
import '../../styles/global.css';
import logo from "../../imagens/logo.png";
import { ErrorMessage, Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import axios from 'axios'


 export function Validation() {
// Send Data from API 
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/user', values)
            .then(resp => {
                const { data } = resp
                console.log(data)
                if (data) {
                    navigate('/menu')
                }
            })
    }


    const validations = yup.object().shape({
        firstName: yup.string().min(4).required(),
        lastName: yup.string().min(5).required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

// Routes 
let navigate = useNavigate()
function handleHome(){
    navigate("/")
}
     return (
             
 <div className='validationContainer'>     
     <img className="logo" src={logo} alt="logo"/>
      <div className='container'>
         <h1> Cadastre-se </h1>
 <Formik
     initialValues={{}}
     onSubmit={handleSubmit}
     validationSchema={validations}
            >
     <Form action=" " >
    <div class="input-field"/>
            
        <div class="input-field"/>
            <Field type="textarea" name="firstName" id="firstName" placeholder= "First Name"/>
                <ErrorMessage
                component="span"
                name="firstName"
                className="Login-Error"
            /> 
        <div class="underline"/>

        <div class="input-field">
            <Field type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                <ErrorMessage
                    component="span"
                    name="lastName"
                    className="Login-Error"
                /> 
        <div class="input-field"/>
        <Field type="email" name="email" id="email" placeholder="Enter Your Email"/>
            <ErrorMessage
                    component="span"
                    name="email"
                    className="Login-Error"
             /> 
        <Field type="password" name="password" id="password" placeholder="Enter Your password"/>
            <ErrorMessage
            component="span"
            name="password"
            className="Login-Error"
            />  
        <div class="underline"/>
    </div>   
            
        <input type="submit" value="Submit"/>
             
            </Form>   
          </Formik>
          <div className='question-Validation'> 
              <a  className='question' onClick={handleHome}> Já tem conta ? Entre Aqui </a>
          </div>
        </div> 
    </div> 
        
     )
   }
 