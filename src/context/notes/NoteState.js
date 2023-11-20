import NoteContext from "./noteContext";
import React, { useState } from 'react'

const backendhost = "http://localhost:5000"
const NoteState = (props) => {

  //use effect hook acting as component did mount 
  const [notes, setnotes] = useState([])

  const getallnotes = async () => {
    const response = await fetch(`${backendhost}/api/notes/fetchnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1NDQ4OTRhNzcwYWEyYzg4N2YxMGUxIn0sImlhdCI6MTcwMDAyMzMyN30.ggCfxZCh-aOi2R2tjSgxdHnzClmuZmtjbfCH3WiyYDs"
      },
       // body data type must match "Content-Type" header
    });
    const jsonfetch =await response.json();
    console.log(jsonfetch)
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
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1NDQ4OTRhNzcwYWEyYzg4N2YxMGUxIn0sImlhdCI6MTcwMDAyMzMyN30.ggCfxZCh-aOi2R2tjSgxdHnzClmuZmtjbfCH3WiyYDs"
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
  const deletenote = async(id) => {
    const response = await fetch(`${backendhost}/api/notes/deletenode/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1NDQ4OTRhNzcwYWEyYzg4N2YxMGUxIn0sImlhdCI6MTcwMDAyMzMyN30.ggCfxZCh-aOi2R2tjSgxdHnzClmuZmtjbfCH3WiyYDs"
      }
       // body data type must match "Content-Type" header
    });
    const jsondel =await response.json();
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
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1NDQ4OTRhNzcwYWEyYzg4N2YxMGUxIn0sImlhdCI6MTcwMDAyMzMyN30.ggCfxZCh-aOi2R2tjSgxdHnzClmuZmtjbfCH3WiyYDs"
      },
      body: JSON.stringify(updatednote), // body data type must match "Content-Type" header
    });
    const jsonupdate = response.json(); // parses JSON response into native JavaScript objects
    console.log(jsonupdate)
    // getallnotes()


    getallnotes()

    // const { title, description, tag } = updatednote;

    // // Assuming your notes state is an array of objects
    // setnotes((prevNotes) => {
    //   // Find the index of the note to be updated
    //   const index = prevNotes.findIndex((note) => note._id === id);

    //   // If the note is found, update it; otherwise, return the original state
    //   if (index !== -1) {
    //     // Create a new array with the updated note
    //     const updatedNotes = [...prevNotes];
    //     updatedNotes[index] = {
    //       ...updatedNotes[index],
    //       title,
    //       description,
    //       tag,
    //     };
    //     return updatedNotes;
    //   } else {
    //     return prevNotes;
    //   }
    // });
  };


  return (
    <NoteContext.Provider value={{ notes, addnote, deletenote, updatenote ,getallnotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState