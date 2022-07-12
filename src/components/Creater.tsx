import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import style from "../styles/Creater.module.css";

interface CreaterProps {
  onCreateNewTask: (content: string) => void;
}

export function Creater({ onCreateNewTask }: CreaterProps) {
  const [newTaskContent, setNewTaskContent] = useState("");

  function handleCreateNewTask() {
    onCreateNewTask(newTaskContent);
    setNewTaskContent("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskContent(event.target.value);
  }

  return (
    <div className={style.creater}>
      <textarea
        name="input"
        value={newTaskContent}
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
      ></textarea>
      <button onClick={handleCreateNewTask}>
        <span>Criar</span>
        {/* <PlusCircle size={18} /> */}
      </button>
    </div>
  );
}
