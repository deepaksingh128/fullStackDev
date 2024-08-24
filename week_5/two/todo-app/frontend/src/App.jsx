import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo';
import  { Todos } from './components/Todos';
import './App.css'


function App() {
  const [todos, setTodos] = useState([]);

  // below approach to get data from backend is not 
  // a good approach, it has many bugs, like request
  // will go again and again (see network(debugging))
  // Solution: useEffect()
  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    });

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
