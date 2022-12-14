import { ITask } from '../../types/tasks';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
    tasks: ITask[],
    selectTask: (taskSelected: ITask) => void
}

function List({ tasks, selectTask }: Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map(item => (
                    <Item 
                        selectTask={selectTask}
                        key={item.id} 
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default List