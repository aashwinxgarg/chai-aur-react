import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter, setCounter] = useState(15);
    // let counter = 15;

    const addValue = ()=> {
        // console.log('value added', Math.random());
        // counter++;
        // setCounter(counter+1);
        // console.log('clicked', counter);

        if(counter<20) {
            setCounter((prevCounter)=> prevCounter+1);
            setCounter((prevCounter)=> prevCounter+1);
            setCounter((prevCounter)=> prevCounter+1);
            
        }
    }
    
    const removeValue = () => {
        if(counter>0) {
            setCounter(counter-1);
        }
    }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>

      <br />
      
      <button
      onClick={removeValue}
      >Remove value</button>
      {/* <p>footer: {counter}</p> */}
    </>
  )
}

export default App
