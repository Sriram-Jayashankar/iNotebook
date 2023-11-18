import React from 'react'
import Notes from './Notes'
import AddNoteform from './AddNoteform'
import Alert from './Alert'
export default function Home() {

  return (
    <div >
      <Alert message="succesfully deleted"/>
      <AddNoteform/>
      <Notes/>
    </div>
  )
}
