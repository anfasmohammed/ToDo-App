import React,{useState} from 'react'

const EditForm = ({editTask,id,taskName,capitalizeFirstLetter}) => {
    const [value,setValue]=useState(taskName)
    const update =(e)=>{
        e.preventDefault()
        let tName=capitalizeFirstLetter(value)
        editTask(tName,id)
        
        setValue("")
    }
  return (
    <form >
           <div className="flex justify-between text-gray-700 sm:gap-2" >
             
             <input onChange={(e)=>setValue(e.target.value)} type="text " value={value} placeholder='update task'  className=" border-2 px-1 w-[180px] md:w-[260px] border-gray-400"/>
             
           <button onClick={update} className="font-semibold bg-gray-100 text-slate-600 md:px-2 md:text-2xl taxt-xl rounded border-2 border-gray-400 hover:bg-gray-400 hover:text-gray-100">Update</button>
           
           </div>
           </form>
  )
}

export default EditForm