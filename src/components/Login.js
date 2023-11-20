import React,{useContext, useState} from 'react'
import NoteContext from '../context/notes/noteContext'
import { useNavigate  } from "react-router-dom";

const Login = () => {

  const {login}=useContext(NoteContext)
  let navigate = useNavigate ();


  const [cred,setcred]=useState({email:"",password:""})

  const onchange=(e)=>
    {
      setcred({
        ...cred,
        [e.target.name]: e.target.value,
      });    }

  const onsubmit=async (e)=>
  {
    e.preventDefault()
    await login(cred)
    navigate("/");

    console.log("login successful")
  }

  return (
    <>
    <div className="container my-10" style={{width:"500px"}}>
      <form onSubmit={onsubmit} >
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

export default Login
