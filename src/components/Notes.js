import React,{useContext, useEffect, useRef, useState}from 'react'
import NoteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
export default function Notes() {
    const {notes,getallnotes}=useContext(NoteContext)
  const [note,setnote]=useState({title:"",description:"",tag:""})
  const {updatenote}=useContext(NoteContext)

    useEffect(()=>
    {
      getallnotes()
    },[])

    const refOpen=useRef(null)
    const refClose=useRef(null)


    const updateNote=(currentnote)=>{
      refOpen.current.click()
      setnote(currentnote)
    }

    const onchange=(e)=>
    {
      setnote({
        ...note,
        [e.target.name]: e.target.value,
      });    }

      const updatenotefn=()=>
      {
        const updatenoteto={
          title:note.title,
          description:note.description,
          tag:note.tag
        }
        refClose.current.click()

        updatenote(note._id,updatenoteto)
      }
  return (
    <>
<button type="button" ref={refOpen} className="btn btn-primary d-none "  data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        

      <div className='container'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter Title" value={note.title }name="title" onChange={onchange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" name="description"value={note.description}  placeholder="enter Description" onChange={onchange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" name="tag" value={note.tag } placeholder="enter Description" onChange={onchange}/>
            </div>
        </div>



      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={
    !note || !note.title || !note.description ||
    (note.title.length < 5 && note.description.length < 5)
  } type="button" className="btn btn-primary" onClick={updatenotefn}>Update changes</button>
      </div>
    </div>
  </div>
</div>




    <div className="container"> 
            {notes && notes.map((note)=>{return <Noteitem key={note._id} note={note} updateNote={updateNote}/>})}
    </div>
    </>
  )
}
