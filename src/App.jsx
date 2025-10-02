import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentManager from './components/StudentManager'


function App() {

  const [name, setName] = useState('');
  const alertValue = (name) => {
     alert(name)
    };
  // state variable

  return (
    <>
      Please insert your name
      <input value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name here"
      />
      <br/>
      <br/>
      <button onClick={() => alertValue(name)}>Save student</button>
      <h4>Hello {name}</h4>


      <StudentManager></StudentManager>
    </>
  )
}

export default App