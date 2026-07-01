import './App.css'
import Botao from './components/Botao'
import Card from './components/Card'
import foto from '../src/assets/images/m2-cs.jpg'
import foto2 from '../src/assets/images/m4-cs.jpg'
import foto3 from '../src/assets/images/m5-cs.jpg'

function App() {

  function mostrarMensagem() {
    alert("Terceiro botão")
  }

  return (
    <div >
     {/*  <Botao func={() => alert("Primeiro botão")} text={"Clique aqui"} background={"btn-primario"} />
      <Botao func={() => alert("Segundo botão")} text={"Sobre nós"} background={"btn-secundario"} />
      <Botao func={mostrarMensagem} text={"Saiba mais"} background={"btn-desativado"} />  */}

      <Botao text={'Clique'} />

      <Card card="card-um" foto={foto} titulo="M2 cs" paragrafo="510cv 2026" texto="COMPRAR"></Card>
      <Card card="card-dois" foto={foto2} titulo="M4 cs" paragrafo="460cv 2017" texto="COMPRAR"></Card>
      <Card card="card-tres" foto={foto3} titulo="M5 cs" paragrafo="635cv 2021" texto="COMPRAR"></Card>

      
    </div>

  )
}

export default App