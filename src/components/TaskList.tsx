import style from "../styles/TaskList.module.css";
import { Creater } from "./Creater";
import { Task } from "./Task";

export function TaskList() {
  return (
    <main className={style.listContainer}>
      <Creater />
      <Task />
    </main>
  );
}
