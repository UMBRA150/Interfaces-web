import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Olacomponent from './components/Olacomponent'
import validarEmail from './components/Olacomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Olacomponent nome={"Tomás"} idade={20} mail={"tomas@tomas.pt"} titulo={"Programador"}/>  
    </>
  )
}

export default App
