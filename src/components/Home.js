import React, { useEffect,useContext } from 'react'
import Notes from './Notes'
import AddNoteform from './AddNoteform'
import { useNavigate } from 'react-router-dom';
import AlertContext from "../context/alert/alertContext"





export default function Home() {
    const {addalert}=useContext(AlertContext)

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) 
    {const alert={
      type:"danger",
      message:"login first"
    }
    addalert(alert)
      navigate("/login")}
    
  }, [])

  return (
    <>
      {localStorage.getItem('token')&&<><AddNoteform/>
      <Notes/></>}
    </>
  )
}
