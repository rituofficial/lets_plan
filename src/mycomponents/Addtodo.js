import React from 'react'
import {useState} from 'react';
const Addtodo = (props) => {
    const [title, setTitle]=useState("")
    const [desc, setDesc]=useState("")
    const submit = (e)=>{
e.preventDefault();
if(!title||!desc ){
    alert("TITLE OR DESCRIPTION CANNOT BE BLANK")
}
props.addtodo(title,desc);
    }
  return (
    <div className="container my-3">
        <h3>Add To Do List</h3>
        <form onSubmit={submit}>
  <div class="mb-3">
    <label for="Title" class="form-label">To Do Title</label>
    <input type="text" class="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="Description" class="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      
    </div>
  )
}

export default Addtodo
