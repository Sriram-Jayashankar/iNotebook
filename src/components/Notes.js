import React,{useContext}from 'react'
import NoteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'

export default function Notes() {
    const {notes,setnotes}=useContext(NoteContext)

  return (
    <div className="container"> 
            {notes.map((note)=>{return <Noteitem note={note}/>})}
    </div>
  )
}