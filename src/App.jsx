import './App.css'
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
export default function App(){
  const [status,setStatus]=useState()
  return (
    <>
      <Router>
         <Navbar status={status} setStatus={setStatus}/>
         <Routes>
          <Route index element={<Home status={status}/>}></Route>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login status={status} setStatus={setStatus}/>}></Route>
        </Routes>
      </Router>
    </>
  )
 }