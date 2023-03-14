import styles from './header.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useState } from 'react'

export const Header = ({onAddTask}) => {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    setTitle('');
    onAddTask(title);
  }
  const cambiar = (event) =>{
    setTitle(event.target.value)
  }

  return (
    <header className = {styles.header} >
        <h2>Lista de deseos</h2>
        <form onSubmit={handleSubmit} className={styles.taskForm}>
            <input value={title} onChange={cambiar} type="text" placeholder='add a new task'/>
            <button>
                Crear
                <AiOutlinePlusCircle size={20}/>
            </button>
        </form>
    </header>

  )
}
