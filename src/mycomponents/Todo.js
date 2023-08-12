import React from 'react'
import Todoo from './Todoo';

const Todo = (props) => {
  return (
    <div  className="container">
    <h3 className="text-center">To Do List</h3>
    {props.abc.length===0? "no planning to display" :props.abc.map((x)=>{
      console.log(props.abc.length)
      return <Todoo def={x}  onDelete={props.onDelete}/>

    })}
    </div>
  )
}

export default Todo
