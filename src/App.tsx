import { useState } from 'react'
//import './App.css'
import { compliments } from './compliments'



function App() {
  const getRand = () => Math.floor(Math.random()*(compliments.length-1))   
//  const rand = getRand()  
  const [compliment, setCompliment] = useState(compliments[getRand()])

    const generateCompliment = () => {
      // rand =  Math.floor(Math.random()*(compliments.length-1))
        setCompliment(compliments[getRand()])
    }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="bg-white shadow-md p-10 text-center max-w-sm rounded-xl "><h1>{compliment}</h1></div>
        <button onClick={generateCompliment}>Generate New Compliment</button>
      </div>     
    </>

  )
}

export default App
