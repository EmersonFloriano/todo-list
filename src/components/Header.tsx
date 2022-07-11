import style from "../styles/Header.module.css";
import rocketLogo from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={style.header}>
      <div>
        <img src={rocketLogo} alt="Rocket" />
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  );
}
