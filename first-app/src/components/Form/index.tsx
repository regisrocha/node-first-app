import React from "react";
import Button from "../Button";
import { ITask } from "../../types/tasks";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        task_name: "",
        time: "00:00:00",
        selected: false,
        completed: false,
        id: ""
    }

    reset() {
        this.setState({
            task_name: "",
            time: "",
            selected: false,
            completed: false,
            id: ""
        });
    }

    addTask(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTasks(
            oltTasks => [
                ...oltTasks, 
                {
                    ...this.state ,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        this.reset();
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Tarefa</label>
                    <input type="text" 
                    value={this.state.task_name} 
                    onChange={evento => this.setState({...this.state, task_name:evento.target.value})}
                    name="task" id="task" placeholder="O que voce quer estudar" required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input 
                    value={this.state.time}
                    onChange={evento => this.setState({...this.state, time: evento.target.value})}
                    type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00" required/>
                </div>
                <Button type="submit" text="Estudar"/>
            </form>
        );   
    }
}

export default Form;