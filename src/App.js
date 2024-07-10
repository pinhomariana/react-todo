import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddToDo from './AddToDo';

function App() {
  const [tasks, setTasks] = useState ([]);

  return (
    <div className="App">
      <h1>To Do</h1>
      <AddToDo tasks={tasks} setTasks={setTasks}/>
      <TodoList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
