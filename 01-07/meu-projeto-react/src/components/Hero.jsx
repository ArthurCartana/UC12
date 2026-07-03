import React from 'react'
import Botao from './Botao';


function Hero({ titulo, subtitulo, imagem }) {
    return (
        <section id='inicio' className='pt-32 pb-20 px-6'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12'>
                <div className='flex-1 relative'>
               { /* Vamos usar SVG para círculo */}
                    <svg className='absolute -top-10 -left-10 w-40 h-40 text-terracota/20 -z-10'
                        viewBox='0 0 100 100'
                        fill='none'
                        xmlns='https://www.w3.org/2000/svg'
                    >

                        <circle cx="50" cy="50" r="48" stroke='currentColor' strokeWidth="4" />
                    </svg>
                    <h1 className='font-display text-5xl md:text-6xl font-semibold leading-tight text-cafe-900'>
                        {titulo}
                    </h1>

                    <p className="mt-6 text-lg text-cafe-600 max-w-md">
                        {subtitulo}
                    </p>

                    <div className='mt-8 flex gap-4'>
                        <Botao texto="Ver cardápio" variante="primario" href="#cardapio" />
                        <Botao texto="Sobre nós" variante="secundario" href="#sobre" />
                    </div>
                </div>

                <div className='flex-1'>
                    <img src="https://media.istockphoto.com/id/2232885441/pt/foto/white-cup-of-black-coffee-on-coffee-beans-background-top-view.jpg?b=1&s=612x612&w=0&k=20&c=lAGMnmHWAE_XOwaWvAFJplZVt9fn_OzrDYH46FPGgWg="
                        alt="Xícara de café especial servida na cafeteria Grão"
                        className='rounded-3xl w-full h-[420px] object-cover shadow-xl'/>
                </div>
                <div className='flex-1'>
                    <span className='font-body text-sm uppercase text-musgo font-medium'></span>
                </div>
            </div>
        </section>
    );
}

export default Hero