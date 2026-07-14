import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Contador from './components/Contador'
import Estado from './components/Estado'
import BotaoTema from './components/BotaoTema'


function App() {
  const [count, setCount] = useState(0)
  const [tema, setTema] = useState("claro")
  const [title, setTitle] = useState("Tema Claro")
  const [contador, setContador] = useState(0);

  useEffect(() => {
    {tema == "claro" ? setTitle("Tema Claro") : setTitle("Tema Escuro")}
  }, [tema])

  useEffect(() => {
    document.title = title
  }, [title])

      function alterarTema(){
        {tema === "claro" ? setTema("escuro") : setTema("claro")}}

    

    useEffect(() => {

        {contador == 10 ? alert("Contador chegou a 10"): "";} 
        {contador == 20 ? setTitle("athos") : "";}
        


    }, [contador])

  return (
    <div className={`${tema === "claro" ? "bg-gray-300 text-black" : "bg-gray-600 text-white"}`}>
    <Contador title={title} contador={contador} setContador={setContador}/>
    <Estado/>
    <BotaoTema funcao={alterarTema} tema={tema}/>
      
    </div>
  
  )
}

export default App