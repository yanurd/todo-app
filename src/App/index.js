//Imports
import { AppUi } from "./AppUi";

// CSS
import "../assets/css/styles.css";

//Context
import { TodoProvider } from "../TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
