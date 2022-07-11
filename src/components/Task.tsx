import style from "../styles/Task.module.css";

import { Circle, Trash } from "phosphor-react";

export function Task() {
  return (
    <div className={style.item}>
      <Circle size={24} className={style.check} />
      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <Trash size={25} className={style.trash} />
    </div>
  );
}
