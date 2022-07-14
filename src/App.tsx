import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Creater } from "./components/Creater";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import style from "./styles/App.module.css";
import clipBoardIcon from "./assets/clipboard.svg";

interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [taskList, setTaskList] = useState(Array<TaskProps>);
  const [completedCounter, setCompletedCounter] = useState(0);

  
  useEffect(()=>{
    changeCompletedCount();
  }, [taskList]);

  function createNewTask(newTaskContent: string) {
    const newTask = {
      id: nanoid(),
      content: newTaskContent,
      isCompleted: false,
    };
    setTaskList((state) => [...state, newTask]);
  }

  function deleteTask(taskToDelete: string){
    
    const tasksWithoutDeletedOne = taskList.filter((task)=>{
      return task.id != taskToDelete;
    });
    setTaskList(tasksWithoutDeletedOne);
  }

  function changeTaskStatus(taskToChangeStatus: string){
    const completedTasks = taskList.map((task)=>{
      if(task.id == taskToChangeStatus){
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    setTaskList(completedTasks);
  }

  function changeCompletedCount(){
    const counter = taskList.filter((task)=>{
      return task.isCompleted == true;
    });
    setCompletedCounter(counter.length);
  }

  return (
    <div>
      <Header />
      <div className={style.creater}>
        <Creater onCreateNewTask={createNewTask} />
      </div>
      <div className={style.Wrapper}>
        <main>
          <header>
            <div className={style.createdTasks}>
              <span>Tarefas criadas</span>
              <span>{taskList.length}</span>
            </div>
            <div>
              {
                completedCounter != 0 ?
                ( <div className={style.completedTasks}>
                  <span>Concluídas</span>
                  <span>{completedCounter} de {taskList.length}</span>
                </div> ) :
                ( <div className={style.completedTasks}>
                  <span>Concluídas</span>
                  <span>0</span>
                </div> )
              }          
            </div>
          </header>
          {
            taskList.length != 0 ?
            taskList.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  isCompleted={task.isCompleted}
                  onDeleteTask={deleteTask}
                  onTaskStatusChange={changeTaskStatus}
                />
              );
            }) :
            (<div className={style.empityList}>
              <img src={clipBoardIcon} alt="clipboard" />
              <span>Você ainda não tem tarefas cadastradas</span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>)
          }
        </main>
      </div>
    </div>
  );
}

export default App;
