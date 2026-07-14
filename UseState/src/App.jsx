import { useState } from 'react'
import './App.css'
import BotaoContador from './components/BotaoContador'
import BotaoCurtida from './components/BotaoCurtida'
import Interruptor from './components/Interruptor'
import BotaoTema from './components/BotaoTema'

function App() {
  const [count, setCount] = useState(0)
    const [tema, setTema] = useState("claro")

      function alterarTema(){
        {tema === "claro" ? setTema("escuro") : setTema("claro")}}
  return (
    <div className={`${tema === "claro" ? "bg-gray-300 text-black" : "bg-gray-600 text-white"}`}>
      <BotaoContador />
      <BotaoCurtida />
      <Interruptor />
      <BotaoTema funcao={alterarTema} tema={tema}/>
    </div>
  )
}

export default App