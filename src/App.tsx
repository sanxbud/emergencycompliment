import { useState } from 'react'
import './App.css'
import { compliments } from './compliments'



function App() {
  const getRand = () => Math.floor(Math.random()*(compliments.length-1))   
//  const rand = getRand()  
  const [compliment, setCompliment] = useState(compliments[getRand()])

    const generateCompliment = () => {
      // rand =  Math.floor(Math.random()*(compliments.length-1))
        setCompliment(compliments[getRand()])
    }

    const submitCompliment =()=>{
    let x =2;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-950">
        <div className="bg-white shadow-md p-10 text-center max-w-2xl rounded-xl "><h1>{compliment}</h1></div>
        <div className="bg-amber-300 p-6 m-4 rounded-xl"><button  onClick={generateCompliment}><p className="text-xl font-bold">Generate New Compliment</p></button></div>
        <div className="p-4 m-4"><button onClick={submitCompliment}><p>Submit a compliment!</p></button></div>
      </div>    
      <footer className="text-center text-white bg-indigo-950 text-sm py-4">made with ♡ by sanjay budhia</footer>
    </>

  )
}

export default App
