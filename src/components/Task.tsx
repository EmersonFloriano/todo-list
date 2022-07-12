import style from "../styles/Task.module.css";

import { Circle, Trash } from "phosphor-react";

interface TaskProps {
  id?: string;
  content: string;
  isCompleted: boolean;
}

export function Task({ content, isCompleted }: TaskProps) {
  return (
    <div className={style.item}>
      <Circle size={25} className={style.check} />
      <span>{content}</span>
      <Trash size={25} className={style.trash} />
    </div>
  );
}
