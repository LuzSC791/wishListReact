import { Header } from "./Components/Header/Header"
import { Tasks } from "./Components/Tasks/Tasks"
import { useState, useEffect } from 'react'

const LOCAL_STORAGE_KEY = "todo: savedList"

export const App = () => {

  const [tasks, setTasks] = useState([])

  const loadSaveTaks = () =>{
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    console.log(saved)
    if(saved)
      setTasks(JSON.parse(saved))

  }

  useEffect(() => {
    loadSaveTaks();
  }, [])

  const setSaveTaks = (newTask) =>{
    setTasks(newTask)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask))
  }

  const addTask = (taskTitle) =>{
    setSaveTaks([...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false 
      }
    ])
  }

  const toggleTaskCompleted = (taskId) =>{
    const newTask = tasks.map(task =>{
      if(task.id === taskId){
        return{
          ...task, isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setSaveTaks(newTask)
  }

  const deleteItem = (taskId) =>{
    const newTask = tasks.filter(task => task.id != taskId)
    setSaveTaks(newTask)
  }


  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks}
        onCompleted={toggleTaskCompleted}
        onDelete = {deleteItem}
      />
    </>
  )
}
