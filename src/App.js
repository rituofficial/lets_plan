
import './App.css';
import Header from './mycomponents/header.js';
import Footer from './mycomponents/Footer.js';
import Todo from './mycomponents/Todo.js';
import React, {useState} from 'react';
import Addtodo from './mycomponents/Addtodo';
function App() {
  
  const onDelete=(def)=>{
    console.log("i delete",def);
setxyz(xyz.filter((e)=>{
return e!==def;
}))
  }
  const addtodo=(title,desc)=>{
    let sno=xyz[xyz.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc

    }
    setxyz([...xyz,myTodo])

    }
  

  
  // let xyz=[
    const[xyz,setxyz]=useState([  
  {
    sno:1,
    title:"go to market",
    desc:"you need to go to the market to get this job done"
  },
  {
    sno:2,
    title:"go to mall",
    desc:"you need to go to the mall to get the dress"
  },
]);
  return (
    <>
    <Header title="Lets_Plan"/>
    <Addtodo addtodo={addtodo}/>
    <Todo abc={xyz} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
