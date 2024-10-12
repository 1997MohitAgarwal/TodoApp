import React,{useState,useEffect} from "react"
import { v4 as uuid } from "uuid"
export default function Todos(){
  const [data,setData]=useState("")
  const [newTodo,setNewTodo]=useState("")
  const [index,setIndex]=useState(null)
  const [message1,setMessage1]=useState(false)
  const [message2,setMessage2]=useState(false)
  let stored_data1 = JSON.parse(localStorage.getItem("todos"))
  const [todo,setTodo] = useState(stored_data1 || [])
  let stored_data2 = JSON.parse(localStorage.getItem("sub-todos"))
  const [subtodo,setSubtodo] = useState(stored_data2 || {})
  function handleChange(e){
    setData(e.target.value)
  }
  function handleChange1(e){
    setNewTodo(e.target.value)
  }
  function handleClick() {
    data.length>0?setTodo([...todo,data]):setMessage2(true)
    message2?setTimeout(()=>{
      setMessage2(false)
    },0):""
    setData("")
  }
  function handleSubTodos(index){
    setIndex(index)
  }
  function handleClick2(){
    subtodo[index]=subtodo[index]?[...subtodo[index]]:[]
    newTodo.length>0?setSubtodo({...subtodo,[index]:[...subtodo[index],newTodo]}):setMessage1(true)
    message1?setTimeout(()=>{
      setMessage1(false)
    },0):""
    setNewTodo("")
  }
   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo))
    localStorage.setItem("sub-todos", JSON.stringify(subtodo))
  }, [todo,subtodo])
  return(
    <>
       <div className="outer">
       <div className="flex1">
       <h3 className="my-auto">Add Your todos</h3>
       <button className="btn1" data-toggle="modal" style={{color:"navy"}} data-target="#exampleModal1"><i className="fa fa-plus-square fa-3x"></i></button>
       </div>
         <div className="d-flex align-items-center justify-content-center flex-column mt-3">
       {todo.length > 0 ?
            todo.map((ele,i)=>{
              return(
                <div className="contain" key={uuid()}>
                <div className="todoList">{ele}</div>
                <button data-toggle="modal" onClick={()=>handleSubTodos(i)} data-target="#exampleModal2" className="edit"><i className="fa fa-plus-square fa-2x"></i></button>
                  <div>
                 <div className="d-flex justify-content-center flex-column">
                  {subtodo[i]?subtodo[i].map((ele,j)=>{
                  return(
                      <div key={uuid()} style={{backgroundColor:"gray"}} className="todoList mb-2">{`${j+1}) ${ele}`}</div>
                      )
                  }):""}
                   </div>
                  </div>
                </div>
              )
            }):
          <h3 style={{color:"black"}}>No Todos to display</h3>}</div>
         <div className="modal" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog-centered modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter your Todo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input className="todoInput" type="text" onChange={handleChange} value={data}></input>
            </div>
            <div className="modal-footer foot">
              {message2 && <p>Please enter todos to add!!</p>}
              <button onClick={handleClick} type="button" className="btn btn-danger">Add</button>
            </div>
          </div>
        </div>
      </div>
          <div className="modal" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog-centered modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter your SubTodo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input className="todoInput" type="text" onChange={handleChange1} value={newTodo}></input>
            </div>
            <div className="modal-footer foot">
              {message1 && <p>Please enter subtodos to add!!</p>}
              <button onClick={handleClick2} type="button" className="btn btn-danger">Add</button>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}