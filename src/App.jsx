// import * as React from "react";
// import { Routes, Route, Link, Router } from "react-router-dom";


// import {Home} from "./pages/home/index"
// import { Validation } from "./pages/validationPage/validation";
// import {Cardapio} from "./pages/cardapio/cardapio";
// import { Menu } from "./componentes/menu/menu"
// // import { AuthContext } from '../../componentes/context/auth';




// export const App= ()=> {
//   // const [user, setUser]= useState(null);

//   // const login = (email, password) => {
//   //   console.log("login auth", {email , password})
//   //   setUser({id: "123", email})
//   // };

//   // const logout = () => {
//   //   console.log('logout')
//   // };

//   return (
//     <div className="App">
//      <Router> 
//        {/* <AuthContext.Provider value={{authenticated: !! user,user, login, logout}}>  */}
//         <Routes>
//          <Route  path="/" element={< Home/>} />
//           <Route  path="/validation" element={<Validation />} /> 
//           <Route path="/cardapio" element={<Cardapio />} />
//           <Route path="/menu" element={<Menu/>} />
//         </Routes>
//         {/* </AuthContext.Provider> */}
//       </Router>
//     </div>
//   );
// }

import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";


import {Home} from "./pages/home/index"
import { Validation } from "./pages/validationPage/validation";
import {Cardapio} from "./pages/cardapio/cardapio";
import { Menu } from "./componentes/menu/menu";
//import {PrivateRoute} from './componentes/Routes/private'
//import  StoreProvider  from "./componentes/Validation/provider";



export const App= ()=> {

 
  return (
    <div className="App">
      <Routes> 
        <Route  path="/" element={< Home/>} />
        <Route  path="/validation" element={<Validation />} /> 
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
    </div>
  );
}