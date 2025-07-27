import { useState } from 'react'
import './App.css'
import { compliments, generateText } from './compliments'
import lilguy from './assets/ugotthislilguy-indigo-950.png'



function App() {
  const getRand = (array:string[]) => { 
    return array[Math.floor(Math.random()*(array.length))]    
  }

//  const rand = getRand()  
  const [compliment, setCompliment] = useState(getRand(compliments))
  const [buttonText, setButtonText] = useState(generateText[0])
    const generateCompliment = () => {
      // rand =  Math.floor(Math.random()*(compliments.length-1))
        setCompliment(getRand(compliments))
        setButtonText(getRand(generateText))
        
    }

    const submitCompliment =()=>{
    
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100 dark:bg-amber-100">
        <header className="flex flex-col items-center pb-13 md:pb-20">
          <img src={lilguy} className="w-40 mb-2 block"/>
          <h1 className={'font-["Caveat"] text-3xl md:text-5xl text-indigo-950 dark:text-indigo-950'}>Emergency Compliment!</h1>
        </header>
        <div key={compliment} className="
          bg-white shadow-xl p-10 px-4 md:p-10 flex items-center justify-center text-center min-w-90 sm:max-w-90 md:max-w-2xl rounded-3xl min-h-40 md:min-h-55 md:min-w-120 lg:min-h-64 lg:min-w-150 mx-1 
          animate-[bounce-up_0.4s_ease-out]" 
          >
          <h1 className="text-xl md:text-[clamp(2rem,3vw,2.33rem)]">{compliment}</h1></div>
        <button className="bg-indigo-200 dark:bg-indigo-200 p-6 m-4 shadow-md rounded-xl hover:bg-indigo-300 dark:hover:bg-indigo-300 hover:scale-110 transform transition duration-200 ease-in-out cursor-pointer" onClick={generateCompliment}><p className="text-base md:text-xl font-bold">{buttonText}</p></button>
        <div className="hidden"><button className="hidden cursor-pointer m-2 rounded-xl hover:scale-110 transform transition duration-200 ease-in-out hidden" onClick={submitCompliment}><p className="font-bold text-sm text-indigo-950 dark:text-indigo-950 dark:hover:text-indigo-850 hidden">Suggest a compliment!</p></button></div>

      </div>    
     
     <footer>
       <a href="https://sanjaybudhia.dev" 
          className="block text-center text-amber-100 bg-indigo-950 font-bold text-sx md:text-sm py-4 dark:bg-indigo-950 dark:text-amber-100 dark:hover:bg-indigo-900 hover:bg-indigo-900 transition">
         <span className="">made with ♡ by sanjay budhia</span>
         <span className="hidden">made with ♥ by sanjay budhia</span>
       </a>
     </footer>

    </>

  )
}

export default App
