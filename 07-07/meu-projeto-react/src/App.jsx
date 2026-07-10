import { useState } from 'react'
import './App.css'
import Botao from './components/Botao'
import Interruptor from './components/Interruptor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Botao/>
    <Interruptor/>
    </>
    
  )
}

export default App
