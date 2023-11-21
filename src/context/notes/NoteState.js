import NoteContext from "./noteContext";
import React, { useState,useContext } from 'react'
import AlertContext from "../alert/alertContext"

const backendhost = "http://localhost:5000"
const NoteState = (props) => {

  const {addalert}=useContext(AlertContext)

  //use effect hook acting as component did mount 
  const [notes, setnotes] = useState([])

  const getallnotes = async () => {
    const response = await fetch(`${backendhost}/api/notes/fetchnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "authtoken": localStorage.getItem('token')
      },
      // body data type must match "Content-Type" header
    });
    const jsonfetch = await response.json();
    setnotes(jsonfetch)
    //setnotes

  }



  //fn to add note that has to be accesed by everyone as a prop 
  const addnote = async (notefromaddnote) => {


    console.log(notefromaddnote)
    const response = await fetch(`${backendhost}/api/notes/createnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "authtoken": localStorage.getItem('token')
      },
      body: JSON.stringify(notefromaddnote), // body data type must match "Content-Type" header
    });
    const jsonadd = response.json();
    console.log(jsonadd)

    getallnotes()

    // const { title, description, tag } = notefromaddnote
    // let tempnote = {
    //   "_id": "65579c09c3992c74849096be",
    //   "user": "65544894a770aa2c887f10e1",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2023-11-17T16:59:53.034Z",
    //   "__v": 0
    // }
    // setnotes(notes.concat(tempnote))
  }

  //fn to del note that has to be accesed by everyone as a prop 
  const deletenote = async (id) => {
    const response = await fetch(`${backendhost}/api/notes/deletenode/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "authtoken": localStorage.getItem('token')
      }
      // body data type must match "Content-Type" header
    });
    const jsondel = await response.json();
    console.log(jsondel)

    getallnotes()


    // console.log(id)
    // const newnotes = notes.filter((notes) => { return notes._id !== id })
    // setnotes(newnotes)
  }


  const updatenote = async (id, updatednote) => {
    //api call

    const response = await fetch(`${backendhost}/api/notes/updatenote/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "authtoken": localStorage.getItem('token')
      },
      body: JSON.stringify(updatednote), // body data type must match "Content-Type" header
    });
    const jsonupdate = response.json(); // parses JSON response into native JavaScript objects
    console.log(jsonupdate)
    const alert={
      type:"success",
      message:"successfulyy update"
    }
    addalert(alert)
    getallnotes()
  };

  const login = async (logincred) => {
    //api call

    const response = await fetch(`${backendhost}/api/auth/login`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logincred), // body data type must match "Content-Type" header
    });
    const jsonupdate =await response.json(); // parses JSON response into native JavaScript objects
    if(jsonupdate.type==="success")
    {
      console.log(jsonupdate.authtoken)

      localStorage.setItem('token',jsonupdate.authtoken)
    }
  };


  const signup = async (signupcred) => {
    //api call

    const response = await fetch(`${backendhost}/api/auth/createuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupcred), // body data type must match "Content-Type" header
    });
    const jsonupdate = response.json(); // parses JSON response into native JavaScript objects
    if(jsonupdate.type==="success")
    {
      console.log(jsonupdate.authtoken)
      localStorage.setItem('token',jsonupdate.authtoken)
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addnote, deletenote, updatenote, getallnotes,login,signup }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState