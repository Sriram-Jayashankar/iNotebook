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
    return(
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState