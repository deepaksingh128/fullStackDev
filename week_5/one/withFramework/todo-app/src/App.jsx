import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([
      {
        title: "Go to Gym",
        description: "Go to Gym from 7-9"
      },
      {
        title: "Study DSA",
        description: "Study DSA from 9-10"
      }
    ]);

    function addTodo() {
      // using spreads operator
      setTodos([...todos, {
        title: "new Todo",
        description: "desc of new todo"
      }]);

      // OR we can write like below also
    //   let newTodos = [];
    //   for(let i=0; i<todos.length; i++) {
    //     newTodos.push(todos[i]);
    //   }
    //   newTodos.push({
    //     title: "new Todo",
    //     description: "desc of new todo"
    //   })

    // OR we can write like this also
    // function addTodo() {
    //   let newTodos = [...todos, {
    //     title: "new Todo",
    //     description: "new to do desc"
    //   }]
    // }
    }

    return (
      <div>
        <button onClick={addTodo}>Add a random todo</button>
        {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
        <Todo title={todos[1].title} description={todos[1].description}></Todo> */}
        {todos.map(function (todo) {
          return <Todo title={todo.title} description={todo.description} />
        })}
      </div>
    )
}

// component
function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
