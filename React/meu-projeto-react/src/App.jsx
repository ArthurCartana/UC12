import './App.css'
import Botao from './components/Botao'
import Card from './components/Card'

function App() {

  function mostrarMensagem() {
    alert("Terceiro botão")
  }

  return (
    <div>
      <h1>Hello world</h1>
      <Botao func={() => alert("Primeiro botão")} text={"Clique aqui"} background={"btn-primario"} />
      <Botao func={() => alert("Segundo botão")} text={"Sobre nós"} background={"btn-secundario"} />
      <Botao func={mostrarMensagem} text={"Saiba mais"} background={"btn-desativado"} />

      <Card></Card>
    </div>
  )
}

export default App