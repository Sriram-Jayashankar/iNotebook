import React,{ useState } from "react"
import AlertContext from "./alertContext"



export default function AlertState(props) {
    const [alert,setalert]=useState({})
    //function to make alert back to null after a set time when alert isnt null
    
    //function to add the alert type and message
    const addalert=(a)=>{
        const {type,message}=a
        setalert({
            type:type,message:message
        })
        setTimeout(() => {
            setalert({});
          }, 1000);

    }

  return (
    
        <AlertContext.Provider value={{alert,addalert}}>
            {props.children}
        </AlertContext.Provider>
    
  )
}
