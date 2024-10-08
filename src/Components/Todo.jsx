import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const Todo = ({index,taskName,id,deleteTask,Complete,done,handleEditToggle,isEditing,changeUpdate}) => {
  const [icon,changeIcon]=useState(done)
  const iconChage=()=>{
    changeIcon(icon)
    
  }
  return (
    
    <div key={index}>
      <div className='flex justify-between  text-white font-medium items-center 
      p-1 gap-2' >
        <div onClick={()=>{iconChage(id)}}>
          {done?<CheckBoxIcon onClick={()=>{Complete(id)}} />:< CheckBoxOutlineBlankIcon onClick={()=>{Complete(id)}} />} 
            
          
           
            </div>
        
          <div className=' w-[300px]'>
            
          {isEditing?
          <form action=""> 
            <input
              type="text"
              value={taskName}
              onClick={(e) => changeUpdate(e.target.value)}
              className="border rounded p-1 w-52"
              autoFocus
            />
          </form>
            :<div className='flex  justify-between items-center '> 
            <div><h1  className={`${done?"line-through text-gray-400 ":" text-gray-700"} text-first-letter bg-gray-100 rounded-xl px-2 `}>{index+1}. {taskName}</h1></div>
            <div><EditIcon onClick={()=>(handleEditToggle(id))} className='hover:text-gray-400'/></div> </div>
            }
            
            
          </div>

          <div >
           
           <DeleteIcon  onClick={() => {deleteTask(id)}} className='hover:text-gray-400'/></div> 
        
    
    </div>
    </div>
  )
}

export default Todo