import { PlusCircle } from "phosphor-react";
import style from "../styles/Creater.module.css";
export function Creater() {
  function handleCreateNewTask() {}

  return (
    <div className={style.creater}>
      <textarea name="input" placeholder="Adicione uma nova tarefa"></textarea>
      <button onClick={handleCreateNewTask}>
        <span>Criar</span>
        {/* <PlusCircle size={18} /> */}
      </button>
    </div>
  );
}
