import styles from './tasks.module.css'
import { Task } from '../Task/Task'

export const Tasks = ({tasks, onCompleted,onDelete}) => {
  const counterTask = tasks.length;
  const completed = tasks.filter(task => task.isCompleted).length;
  return (
    <div className={styles.headerTask}>
        <div className={styles.headerlist}>
          <div className={styles.conteinerHeader}>
            <p>Deseos</p>
            <span>{counterTask}</span>
          </div>
          
          <div className={styles.conteinerHeader}>
            <p>Completado</p>
            <span>{completed} de {counterTask}</span>
          </div>
        </div>

        <div className={styles.listTask}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onCompleted={onCompleted} onDelete={onDelete}/>
        ))}
        </div>
    </div>

    
    )
}
