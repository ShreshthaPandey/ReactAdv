import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter , setCounter] = useState(15) // st counter bolta hi ke counter me batao kya kaam karu
   // since we want to increment so we did it


  //let counter = 5

  const addValue = () => {
    setCounter(counter+1) // here is the main role of set counter
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      
      <button
      onClick = {addValue}>add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
