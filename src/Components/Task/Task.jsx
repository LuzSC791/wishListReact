import styles from './task.module.css'
import {AiOutlineDelete} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'

export const Task = ({task, onCompleted,onDelete}) => {
  return (
    <>
        <div className={styles.task}>
            <button className={styles.listContainer} onClick={ () =>onCompleted(task.id)}>
                {task.isCompleted ? <AiFillCheckCircle /> : <div /> }
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
            <button className={styles.deleteItem} onClick={() => onDelete(task.id)}>
                <AiOutlineDelete size={20}/>
            </button>
        </div>
    </>
  )
}
