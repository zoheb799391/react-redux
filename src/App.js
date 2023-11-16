
import './App.css';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      <h1>Todo-List | React-Redux</h1>
      <Addtodo/>
      <Todos/>
    </div>
  );
}

export default App;
