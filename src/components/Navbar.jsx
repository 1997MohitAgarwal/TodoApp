import React from "react"
import {Link} from "react-router-dom"
export default function Navbar(props){
  function handleLogout(){
    props.setStatus(false)
  }
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#">Todos</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {!props.status && <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>}
      </li>
    </ul>
    <div className="form-inline my-2 my-lg-0">
      <Link style={{display:props.status?"none":"block"}} className="btn btn-sm btn-warning my-sm-0 text-white" to="/login">Login</Link>
      <button onClick={handleLogout} disabled={props.status?false:true} className="btn btn-sm btn-warning ml-2 my-sm-0 text-white" style={{opacity:props.status?1:0}} type="submit">Logout</button>
    </div>
  </div>
</nav>
  )
}