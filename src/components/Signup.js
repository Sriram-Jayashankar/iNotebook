import React,{useContext, useState} from 'react'
import NoteContext from '../context/notes/noteContext'
import { useNavigate  } from "react-router-dom";

export default function Signup() {



  const {signup}=useContext(NoteContext)

  let navigate = useNavigate ();


  const [cred,setcred]=useState({name:"",email:"",password:""})

  const onchange=(e)=>
    {
      setcred({
        ...cred,
        [e.target.name]: e.target.value,
      });    }

  const onsubmit=async (e)=>
  {
    e.preventDefault()
    await signup(cred)
    navigate("/login");

    console.log("login successful")
  }


  return (
    <>
    <div className="container my-10" style={{width:"500px"}}>
      <form onSubmit={onsubmit} >
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" onChange={onchange} name="name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onchange} name="email"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={onchange} name="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </>
  )
}
