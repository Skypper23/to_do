import { useState } from 'react'
import "./App.css";
import Todo from "./components/Todo.jsx"
import TodoForm from './components/TodoForm.jsx';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar React",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Curso React JS",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Treino Basquete",
      category: "Treino",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1 className='list-task'>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) =>(
          <Todo key={todo.id} todo={todo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
