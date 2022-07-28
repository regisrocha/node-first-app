import React, { useState } from 'react';
import './../../App.css';
import style from './App.module.scss';
import Form from '../Form';
import List from '../List';
import { Timer } from '../Timer';
import { ITask } from '../../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selected?.id ? true : false
    })));
  }

  return (
    <div className="App">
      <header className={` ${style.AppStyle} ${ selected ? style.itemSelecionado : ''} `}>
        <p>
          <Form setTasks={setTasks}/>
          <Timer/>
          <List selectTask={selectTask} tasks={tasks}/>
        </p>
      </header>
    </div>
  );
}

export default App;
