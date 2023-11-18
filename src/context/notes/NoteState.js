import NoteContext from "./noteContext";
import React, { useState } from 'react'


const NoteState=(props)=>{
    const s=[
        {
          "_id": "65579bdd00f60b5650ad4bd7",
          "user": "65544894a770aa2c887f10e1",
          "title": "this is a why demotitle",
          "description": "im trying to improve my typing skillaaas",
          "tag": "whyyyyyy",
          "date": "2023-11-17T16:59:09.214Z",
          "__v": 0
        },
        {
          "_id": "65579bde00f60b5650ad4bd9",
          "user": "65544894a770aa2c887f10e1",
          "title": "this is a why demotitle",
          "description": "im trying to improve my typing skillaaas",
          "tag": "whyyyyyy",
          "date": "2023-11-17T16:59:10.701Z",
          "__v": 0
        },
        {
          "_id": "65579be100f60b5650ad4bdb",
          "user": "65544894a770aa2c887f10e1",
          "title": "this is a why demotitle",
          "description": "im trying to improve mdddddddy typing skillaaas",
          "tag": "whyyyyyy",
          "date": "2023-11-17T16:59:13.409Z",
          "__v": 0
        },
        {
          "_id": "65579c09c3992c74849096be",
          "user": "65544894a770aa2c887f10e1",
          "title": "this is a why demotitle",
          "description": "im trying to improve mdddddddy typing skillaaas",
          "tag": "whyyyyyyaa",
          "date": "2023-11-17T16:59:53.034Z",
          "__v": 0
        }
      ]
    const [notes,setnotes]=useState(s)
      //fn to add note that has to be accesed by everyone as a prop 
    const addnote=(notefromaddnote)=>{
        const {title,description,tag}=notefromaddnote
        let tempnote={
            "_id": "65579c09c3992c74849096be",
            "user": "65544894a770aa2c887f10e1",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-11-17T16:59:53.034Z",
            "__v": 0
          }
        setnotes(notes.concat(tempnote))
    }
    //fn to del note that has to be accesed by everyone as a prop 
    const deletenote=(id)=>{
      console.log(id)
      const newnotes=notes.filter((notes)=>{ return notes._id!==id})
      setnotes(newnotes)
    }


    const updatenote = async (id, updatednote) => {
      //api call
      
      // const response = await fetch(url, {
      //   method: "POST", // *GET, POST, PUT, DELETE, etc.
      //   headers: {
      //     "Content-Type": "application/json",
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: JSON.stringify(data), // body data type must match "Content-Type" header
      // });
      // return response.json(); // parses JSON response into native JavaScript objects




      const { title, description, tag } = updatednote;
    
      // Assuming your notes state is an array of objects
      setnotes((prevNotes) => {
        // Find the index of the note to be updated
        const index = prevNotes.findIndex((note) => note._id === id);
    
        // If the note is found, update it; otherwise, return the original state
        if (index !== -1) {
          // Create a new array with the updated note
          const updatedNotes = [...prevNotes];
          updatedNotes[index] = {
            ...updatedNotes[index],
            title,
            description,
            tag,
          };
          return updatedNotes;
        } else {
          return prevNotes;
        }
      });
    };


    return(
        <NoteContext.Provider value={{notes,addnote,deletenote,updatenote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState