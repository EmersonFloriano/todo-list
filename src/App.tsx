import { nanoid } from "nanoid";
import { useState } from "react";
import { Creater } from "./components/Creater";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import style from "./styles/App.module.css";

interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [taskList, setTaskList] = useState(Array<TaskProps>);

  function createNewTask(newTaskContent: string) {
    const newTask = {
      id: nanoid(),
      content: newTaskContent,
      isCompleted: false,
    };
    setTaskList((state) => [...taskList, newTask]);
  }

  return (
    <div>
      <Header />
      <div className={style.Wrapper}>
        <Creater onCreateNewTask={createNewTask} />
        <main>
          {taskList.map((task) => {
            return (
              <Task
                key={task.id}
                content={task.content}
                isCompleted={task.isCompleted}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
