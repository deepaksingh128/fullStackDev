import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // data fetching hook
  const {todos, loading} = useTodos();
  
  if(loading) {
    return <div>
      loading...
    </div>
  }
  
  // useIsOnlineHook

  return (
    <>
    <p>Using functional components</p>
      <MyComponent /> <br />
    <p>Using class based componenets</p>
    <MyComponentClass /> <br />
    <h2>Using Custom Hooks(data fetching)</h2>
    <div>
      <p>Network count is :- {todos.network}</p>
      <p>Messaging count is :- {todos.messaging}</p>
      <p>Jobs count is :- {todos.jobs}</p>
      <p>Notifications count is :- {todos.notifications}</p>
    </div> <br />
    <h2>Using Custom hook(isOnlineHook)</h2>

    </>
  )
}

function MyComponent() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return <div>
    <p>Count is {count}</p>
    <button onClick={incrementCount}>Increment</button>
  </div>
}

class MyComponentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <p>Count is {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  } 
}

function useTodos() {
    const [todos, setTodos] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          axios.get("http://localhost:3000/sum-server")
          .then(res => {
            console.log("res", res);
            setTodos(res.data);
            setLoading(false);
          });
        }, 2000)
      },[]
    );
  console.log(todos);
  return {todos, loading}
}

export default App
