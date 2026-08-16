import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) 

  // let counter = 15

 const addValue = () => {
    if (counter < 50) {
      setCounter(counter + 1)

      /*
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)

      -- The Output = 15(default) -> after click 19, this will act as a bunch and give the total result --
      */
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>React and Vite</h1>
    <hr />
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value: {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
