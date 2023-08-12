import React from 'react'

const Todoo = ({def,onDelete}) => {
  return (
    <div>
      <h4>{def.title}</h4>
      <p>{def.desc}</p>
 <button type="button" class="btn-sm btn-danger" onClick={()=>{onDelete(def)}}>Delete</button>
    </div>
  )
}

export default Todoo;
