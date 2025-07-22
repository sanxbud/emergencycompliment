import { useState } from 'react'
import './App.css'
import { compliments, generateText } from './compliments'
import lilguy from './assets/ugotthislilguy-indigo-950.png'
import lilguylight from './assets/ugotthislilguy.png'



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
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100 dark:bg-indigo-950">
        <header className="flex flex-col items-center pb-20">
          <img src={lilguy} className="w-40 mb-2 block dark:hidden"/>
          <img src={lilguylight} className="w-40 mb-2 hidden dark:block"/>
          <h1 className={'font-["Caveat"] text-5xl text-indigo-950 dark:text-amber-100'}>Emergency Compliment!</h1>
        </header>
        <div key={compliment} className="
          bg-white shadow-xl p-10 flex items-center justify-center text-center max-w-2xl rounded-3xl min-h-65 min-w-150 
          animate-[bounce-up_0.4s_ease-out]" 
          >
          <h1 className="text-[clamp(2rem,3vw,2.33rem)]">{compliment}</h1></div>
        <button className="bg-indigo-200 dark:bg-amber-100 p-6 m-4 shadow-md rounded-xl hover:bg-indigo-300 dark:hover:bg-amber-200 hover:scale-110 transform transition duration-200 ease-in-out cursor-pointer" onClick={generateCompliment}><p className="text-xl font-bold">{buttonText}</p></button>
        <div className=""><button className="cursor-pointer m-2 rounded-xl hover:scale-115 transform transition duration-200 ease-in-out" onClick={submitCompliment}><p className="font-bold text-sm text-indigo-950 dark:text-amber-100 dark:hover:text-amber-200">Suggest a compliment!</p></button></div>

      </div>    
     
     <footer>
       <a href="https://sanjaybudhia.dev" 
          className="block text-center text-amber-100 bg-indigo-950 font-bold text-sm py-4 dark:bg-amber-100 dark:text-indigo-950 dark:hover:bg-amber-200 hover:bg-indigo-900 transition">
         <span className="dark:hidden">made with ♡ by sanjay budhia</span>
         <span className="hidden dark:inline">made with ♥ by sanjay budhia</span>
       </a>
     </footer>

    </>

  )
}

export default App
