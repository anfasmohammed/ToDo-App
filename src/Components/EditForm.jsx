import React,{useState} from 'react'

const EditForm = ({editTask,id,taskName}) => {
    const [value,setValue]=useState(taskName)
    const update =(e)=>{
        e.preventDefault()
         
        editTask(value,id)
        setValue("")
    }
  return (
    <form >
           <div className="flex justify-between text-gray-700" >
             
             <input onChange={(e)=>setValue(e.target.value)} type="text " value={value} placeholder='update task'  className=" border-2 px-1 border-gray-400"/>
             
           <button onClick={update} className="font-semibold bg-gray-100 text-slate-600 px-2 text-2xl rounded border-2 border-gray-400 hover:bg-gray-400 hover:text-gray-100">Update</button>
           
           </div>
           </form>
  )
}

export default EditForm