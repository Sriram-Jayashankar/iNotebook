import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function Noteitem(props) {
  const {deletenote}=useContext(NoteContext)
    const {note,updateNote}=props
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Kolkata' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(note.date));

    const [isHovered, setIsHovered] = useState(false);




    //function to make del dynamic
    const handleMouseEnter=()=>
    {
        setIsHovered(true)
    }

    const handleMouseLeave=()=>{
        setIsHovered(false)

    }


    //function to delete node
    const deletenodefn=()=>{
      deletenote(note._id)
    }


    //function to update node
  
  return (
    <>
    <div className="container my-3 mx-3" >
      <div className="card">
  <div className="card-header" style={{fontSize:"32px",fontWeight: 'bold'}}>
       {note.title}
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{note.description}</p>
      <footer style={{textAlign:"right"}} className="blockquote-footer">{formattedDate}</footer>
      <div onClick={deletenodefn} className="d-inline-flex align-items-baseline" style={{cursor: "pointer"}}onMouseEnter={handleMouseEnter}       onMouseLeave={handleMouseLeave}>
      <i className="fa-solid fa-trash mx-3" ></i>
      { isHovered?  <p>Delete</p> :null }
      </div>


      <div onClick={()=>{updateNote(note)}} className="d-inline-flex align-items-baseline" style={{cursor: "pointer"}}onMouseEnter={handleMouseEnter}       onMouseLeave={handleMouseLeave}>
      <i className="fa-solid fa-pen-to-square mx-3"></i>
      { isHovered?  <p>Edit</p> :null }
      </div>

    </blockquote>
  </div>
</div>
</div>
    </>
  )
}
