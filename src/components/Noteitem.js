import React from 'react'

export default function Noteitem(props) {
    const {note}=props
  return (
    <>
    <div className="container my-3 mx-3" >
      <div class="card">
  <div class="card-header">
    {note.title}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{note.description}</p>
      <footer class="blockquote-footer">{note.date}</footer>
    </blockquote>
  </div>
</div>
</div>
    </>
  )
}
