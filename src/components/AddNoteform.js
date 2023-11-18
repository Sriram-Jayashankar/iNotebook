import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import AlertContext from "../context/alert/alertContext"
export default function AddNoteform() {
    const {addnote}=useContext(NoteContext)
//addnote takes object of title desc and tag
    const [note,setnote]=useState({})

    //alert adding
    const {addalert}=useContext(AlertContext)




    const onchange=(e)=>
    {
        setnote({...note,[e.target.name]:e.target.value})
    }

    const addnotefn=()=>
    {
        const alert={
            type:"primary",
            message:"successfulyy added"
        }
        addalert(alert)
        console.log(note)
        addnote(note)  
    }







    return (
        <>
        <h1 style={{textAlign:"center"}} >
Add new notes        </h1>
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter Title" name="title" onChange={onchange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" name="description" placeholder="enter Description" onChange={onchange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" name="tag" placeholder="enter Description" onChange={onchange}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={addnotefn}>Add Note</button>
        </div>

        </>
    )
}
