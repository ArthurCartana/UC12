import './App.css'
import Hero from './components/Hero'
import Botao from './components/Botao'
import Header from './components/Header'
import { linksNav } from './data/conteudo'

function App() {

  return (
   <>
   <Header links={linksNav}/>
   <Hero titulo="Café especial, torrado com cuidado" subtitulo= "Grãos selecionados diretamente de produtores parceiros, torrados em pequenos lotes para preservar cada nota de sabor." imagem="https://media.istockphoto.com/id/2232885441/pt/foto/white-cup-of-black-coffee-on-coffee-beans-background-top-view.jpg?b=1&s=612x612&w=0&k=20&c=lAGMnmHWAE_XOwaWvAFJplZVt9fn_OzrDYH46FPGgWg="/>
   </>
  )
}

export default App
