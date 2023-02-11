import { AppRouter } from "./router/AppRouter";
import css from "./App.module.scss";

function App() {
  return (
    <div className={`${css.container}`}>
      <AppRouter />
    </div>
  );
}

export default App;
