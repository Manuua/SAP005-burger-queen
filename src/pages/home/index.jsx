import React from 'react'

import'./styles.css';
import '../../styles/global.css'
import logo from "../../imagens/logo.png";

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'



export function Home(){

    //const [value, setValue] = useState("");  
  
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/auth', values)
        .then(resp => console.log(resp))
            // .then(resp => {
            //     const { data } = resp
            //     if (data) {
            //         localStorage.setItem('app-token', data)
            //         history.push('/')
            //     }
            // })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

    // const{authenticated , login } = useContext(AuthContext)

    // const[email, setEmail] = useState("");
    // const [password, setPassword] = useState("")
  
  
    
  

    // const [values, setValues] = useState(initialState)
    // const { setToken } = useContext(StoreContext)
    // //const history = useHistory();


    

    return (
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
          name="email" 
          id="email" 
          placeholder="Enter Your email" 
          />
     <ErrorMessage
        component="span"
        name="email"
        className="Login-Error"
        />

    <div class="underline"></div>
            
    <div class="input-field">
        <Field  
        type="password"
        name="password" 
        id="password"  
        placeholder="Enter Your Password"
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
       
    </div>     
        
    </div>

    )
  }
