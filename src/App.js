import logo from "./logo.svg";
import "./App.css";
import IdxTablesContainer from "./containers/IdxTablesContainer";
import TodosContainer from "./containers/TodosContainer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer />
        <hr />
      </header>
    </div>
  );
}

export default App;
