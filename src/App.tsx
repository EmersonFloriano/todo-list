import { Creater } from "./components/Creater";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import style from "./styles/App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={style.Wrapper}>
        <Creater />
        {/* <main>
          <div>Tamanho da lista</div>
        </main> */}
      </div>
    </div>
  );
}

export default App;
