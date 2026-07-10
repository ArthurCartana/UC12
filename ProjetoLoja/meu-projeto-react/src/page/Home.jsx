import React from 'react'
import Header from '../components/Header'
import { linksNav } from './../data/conteudo';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header links={linksNav} />

      <Hero titulo="Café especial, torrado com cuidado" subtitulo="Grãos selecionados diretamente de produtores parceiros, torrados em pequenos lotes para preservar cada nota de sabor." imagem="https://media.istockphoto.com/id/2232885441/pt/foto/white-cup-of-black-coffee-on-coffee-beans-background-top-view.jpg?b=1&s=612x612&w=0&k=20&c=lAGMnmHWAE_XOwaWvAFJplZVt9fn_OzrDYH46FPGgWg=" />

      {/* Sobre */}

      <section id='sobre' className='py-24 px-6 bg-creme-claro'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12'>
          <div className='flex-1 w-full h-72 rounded-2xl bg-cafe-900/5 border-2 border-dashed border-cafe-900/20 flex items-center justify-center'>
            <img src="https://media.istockphoto.com/id/2232885441/pt/foto/white-cup-of-black-coffee-on-coffee-beans-background-top-view.jpg?b=1&s=612x612&w=0&k=20&c=lAGMnmHWAE_XOwaWvAFJplZVt9fn_OzrDYH46FPGgWg=" alt="Xícara de café" className='rounded-3xl w-full h-[420px] object-cover shadow-xl' />

          </div>

          <div className='flex-1'>
            <span className='font-body text-sm uppercase text-musgo font-medium'>
              Nossa história
            </span>
            <h2 className='font-display text-4xl font-semibold text-cafe-900 mt-3'>
              Do produtor à xícara
            </h2>
            <p className='mt-4 text-cafe-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum accusantium rem, in a animi. Eaque voluptas eos omnis sed nisi inventore voluptatem, quisquam distinctio maxime quae accusamus voluptatum error.
            </p>
          </div>

        </div>

      </section>

      {/* Cardápio */}

      <section id='cardapio' className='py-24 px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Titulo da seção cardápio */}
        </div>

        <div className='grid grid-cols-1 md-grid-cols-3 gap-6'>
          {/* Os itens do cardápio. Tem que ler os itens que estão no conteudo.js como fizemos com os links do nav*/}
        </div>
      </section>

      {/* criar a seção de depoimentos inteira (lendo também do arquivo conteudo.js) */}

      <Footer ano={new Date().getFullYear()} links={linksNav} />
    </div>
  )
}

export default Home