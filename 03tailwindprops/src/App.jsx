import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Dhiraj",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
    <div className="flex h-screen items-center justify-center bg-blue-500 mb-4">
      <h1 className="text-4xl font-bold text-white">
        Tailwind v4 is Working!
      </h1>
    </div>
    <div className='flex gap-2 p-2'>
      <Card username="Run React"/>
      <Card username="Run Tailwind and Props"/>
    </div>
    
    </>
  )
}

export default App
