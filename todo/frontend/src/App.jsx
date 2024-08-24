import React , { Suspense, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

const Landing = React.lazy(() => import('./components/Landing'))
const Dashboard = React.lazy(() => import('./components/Dashboard'))
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

import { CountContext } from './context'


function App() {
    const [count, setCount] = useState(0);

    return (
      <>
        <CountContext.Provider value={{count, setCount}}>
          <Count />
        </CountContext.Provider>
      </>
    )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const {count} = useContext(CountContext);

    return <div>
      {count}
    </div>
}

function Buttons() {
    const { setCount } = useContext(CountContext)
    return <div>
      <button onClick={() => setCount(c => c+1)}>Increase</button>
      <button onClick={() => setCount(c => c-1)}>Decrease</button>
    </div>
}





export default App
