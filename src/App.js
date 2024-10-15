import React,{useEffect, useState} from "react";
import Todo from "./Components/Todo";
import EditForm from "./Components/EditForm";

let localData=()=>{
  let list=localStorage.getItem("data")
  if (list){
    return JSON.parse(list)
  }else{
    return[]
  }
}
function App() {
  const[todoList,setTodoList]=useState(localData())
  const[newTask,setNewTask]=useState("")
  
  
  //add task
  const addTask=(e)=>{
    e.preventDefault()

    let task={
      id:todoList.length===0 ? 1 : todoList[todoList.length-1].id +1,
      taskName:newTask,
      completed:false,
      isEditing:false
    }
    if (newTask===""){
      alert("Please add Task...")
      return;

    }

    let newTodoList =[...todoList,task]
    setTodoList(newTodoList)
    setNewTask("")


  }
  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(todoList))
  },[todoList])

  //delete task
  const deleteTask=(id)=>{
    setTodoList(todoList.filter((item) => {
      return item.id !== id
    }))
  }

  //complete
  const Complete=(id)=>{
    setTodoList(todoList.map((item)=>
      item.id===id?{...item,completed:!item.completed}:item
    ))
  }
  

  // update Task
/*const handleEditToggle=(id)=>{
  setTodoList(todoList.map((item)=>
    item.id===id? {...item,isEditing:!(item.isEditing)}:item
))
}
  const changeUpdate=(id)=>{
  setTodoList(todoList.map((item)=>
     item.id === id ? {...item}:item
  ))
  handleEditToggle(id)
}*/
const editToDo=(id)=>{
setTodoList(todoList.map((item)=>item.id===id?
{...item,isEditing:!item.isEditing}:item))
}
const editTask=(taskName,id)=>{
  setTodoList(todoList.map((item)=>
    item.id===id?
  {...item,taskName,isEditing:!item.isEditing}:item))
}

  return (
     
  
<div className="bg-slate-900 bg-opacity-90 flex flex-col gap-9 justify-center items-center h-screen mt-9">
<h1 className="  text-5xl text-gray-200 font-mono">ToDo List</h1>
<form >
<div className="flex gap-3" >
  
  <input onChange={(e)=> setNewTask(e.target.value)} value={newTask} type="text " placeholder="Enter the task...." className="px-9 border-2 border-gray-400"/>
  
<button onClick={addTask} className="font-semibold bg-gray-100 text-slate-600 px-7 py-2 text-2xl rounded border-2 border-gray-400 hover:bg-gray-400">Add</button>

</div>
</form>
<div>
  {todoList.map((item,index)=>{
    return(
      item.isEditing?<EditForm editTask={editTask}
      id={item.id}
      taskName={item.taskName}/>:
      <Todo taskName={item.taskName}
      id={item.id}
      index={index}
      deleteTask={deleteTask}
      Complete={Complete}
      done={item.completed}
      isEditing={item.isEditing}
      editToDo={editToDo}
      editTask={editTask}
      />

    )
  })}
</div>
</div>
  );
}

export default App;
