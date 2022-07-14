import style from "../styles/Task.module.css";

import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";

interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
  onDeleteTask: (taskToDelete: string) => void;
  onTaskStatusChange: (taskToChangeStatus: string) => void;
}

export function Task({
  id,
  content,
  isCompleted = false,
  onDeleteTask,
  onTaskStatusChange,
}: TaskProps) {
  const [checkHover, setCheckHover] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function toggleHover() {
    setCheckHover(!checkHover);
  }

  function handleTaskStatusChange() {
    onTaskStatusChange(id);
  }

  return (
    <div className={style.item}>
      <button
        title={"Mark as completed"}
        className={style.check}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={handleTaskStatusChange}
      >
        {isCompleted ? (
          <div className={style.checkedTask}>
            <CheckCircle size={24} weight="fill" />
          </div>
        ) : checkHover ? (
          <Circle size={24} weight="duotone" />
        ) : (
          <Circle size={24} />
        )}
      </button>

      {isCompleted ? (
        <span>
          <s>{content}</s>
        </span>
      ) : (
        <span>{content}</span>
      )}

      <button
        title={"Delete Task"}
        className={style.trash}
        onClick={handleDeleteTask}
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
