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
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100">
        <div className="bg-white shadow-xl p-10 flex items-center justify-center  text-center max-w-2xl rounded-3xl min-h-60 "><h1 className="text-[clamp(2rem,3vw,2.33rem)]">{compliment}</h1></div>
        <button className="bg-indigo-200 p-6 m-4 shadow-md rounded-xl" onClick={generateCompliment}><p className="text-xl font-bold">Another one!</p></button>
        <div className="m-2"><button onClick={submitCompliment}><p className="font-bold text-fuschia-700">Suggest a compliment!</p></button></div>
      </div>    
      <footer className="text-center text-amber-100 bg-indigo-950 font-bold text-sm py-4">made with ♡ by sanjay budhia</footer>
    </>

  )
}

export default App
