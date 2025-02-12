import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculadora from './components/Calculadora'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-100'>
      <Calculadora />
    </div>
  )
}

export default App
