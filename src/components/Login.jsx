import React,{useState} from "react"
import Todos from "./Todos"
export default function Login(props){
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [message,setMessage]= useState(false)
  function handle_submit(e){
    e.preventDefault();
  }
   function handleChange1(e){
    setEmail(e.target.value)
  }
   function handleChange2(e){
    setPassword(e.target.value)
  }
const url ="https://reqres.in/api/login";
const options = {
  method:"POST",
	headers: {
		"Content-Type":"application/json"
	},
  body:JSON.stringify({
    email,password
  })
};
async function login(){
	  const response = await fetch(url, options);
	  const result = await response.json();
    if(email==="eve.holt@reqres.in" && password==="cityslicka"){
      setEmail("")
      setPassword("")
      props.setStatus(true)
      localStorage.setItem("token",result.token);
    }
  else{
     setMessage(true)
     setTimeout(()=>{
       setMessage(false)
     },2500)
     setPassword("")
    }
  }
  return(
      <div>
      <h3 style={{opacity:props.status?0:1}}className="text-center heading text-secondary">Please login here to mark your todo-list</h3>
      {!props.status?<form onSubmit={handle_submit}>
      <label className="text">Email</label>
      <input type="email" value={email} onChange={handleChange1} required></input>
      <label className="text">Password</label>
      <input type="password" value={password} onChange={handleChange2} required></input>
      <button className="btn3" onClick={login}>Login</button>
      {message && <div><strong>Invalid Credentials</strong></div>}
    </form>:<Todos/>}
    </div>
  )
}