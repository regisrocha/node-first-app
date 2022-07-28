import { ITask } from "../../../types/tasks";
import style from "./Item.module.scss";

interface Props extends ITask {
    selectTask: (selectTask: ITask) => void
}

export default function Item(
    {
        task_name, 
        time, 
        selected, 
        completed, 
        id, 
        selectTask
    }: Props ) {
    
    return (
        <li className={style.item} onClick={() => selectTask(
            {
                task_name,
                time,
                selected,
                completed,
                id
            }
        )}>
            <h3>{task_name}</h3>
            <span>{time}</span>
        </li>
    );
}