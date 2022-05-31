import React, { Children } from "react";
import context  from "./context";

const Storeprovider =({children})=> {

    
    return (
  <context.Provider>
      value= {
          {
            token,
            setToken,
          }
      }
      {children}
  </context.Provider>
  )
}

export default Storeprovider