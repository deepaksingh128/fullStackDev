import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
 
  return (
    <>
      {/* <p>
        Learning:- Display: Flex (Using normal(vanilla) css)
      </p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{backgroundColor: 'red'}}>Hi, I am deepak singh</div>
        <div style={{backgroundColor: 'blue'}}>Hi, I am deepak singh</div>
        <div style={{backgroundColor: 'green'}}>Hi, I am deepak singh</div>
        <div style={{backgroundColor: 'grey'}}>Hi, I am deepak singh</div>
        <div style={{backgroundColor: 'green'}}>Hi, I am deepak singh</div>
      </div>
      <p>
        Learning:- Display: Flex (Using tailwind css)
      </p>
      <div className='flex justify-between'>
        <div className='bg-red-500'>Hi, I am deepak singh</div>
        <div className='bg-blue-500'>Hi, I am deepak singh</div>
        <div className='bg-green-500'>Hi, I am deepak singh</div>
        <div className='bg-gray-300'>Hi, I am deepak singh</div>
        <div className='bg-green-500'>Hi, I am deepak singh</div>
      </div>

      <br />

      <p>
        Learning:- Grid (using tailwind css)
      </p>
      <div className='grid grid-cols-12'>
        <div className='bg-red-500 col-span-2'>Hi, I am deepak singh</div>
        <div className='bg-blue-500 col-span-3'>Hi, I am deepak singh</div>
        <div className='bg-green-500 col-span-3'>Hi, I am deepak singh</div>
        <div className='bg-gray-300 col-span-2'>Hi, I am deepak singh</div>
        <div className='bg-green-500 col-span-2'>Hi, I am deepak singh</div>
      </div>

      <p> Same as above using flex :- </p>
      <div className='flex'>
        <div className='bg-red-500 w-[10%]'>Hi, I am deepak singh</div>
        <div className='bg-blue-500 w-[30%]'>Hi, I am deepak singh</div>
        <div className='bg-green-500 w-[30%]'>Hi, I am deepak singh</div>
        <div className='bg-gray-300 w-[10%]'>Hi, I am deepak singh</div>
        <div className='bg-green-500 w-[20%]'>Hi, I am deepak singh</div>
      </div>

      <br />

      <p>
        Learning:- Responsiveness 
      </p>
      <div className='bg-red-500 md:bg-blue-500'>
        <div> Hi </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        <div className='bg-red-500'> Hi there </div>
        <div className='bg-green-500'> Hi there </div>
        <div className='bg-gray-500'> Hi there </div>
      </div> */}

      <RevenueCard title={"amount pending"} orderCount={"13"} amount={"12344"}/>
    </>
  )
}

export default App
