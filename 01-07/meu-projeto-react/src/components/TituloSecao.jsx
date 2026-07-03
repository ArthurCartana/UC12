import React from 'react'

function TituloSecao({ subtitulo, titulo, descricao }) {
    return (
        <div className='max-w-xl mx-auto text-center mb-14'>
            <span className='font-body text-sm uppercase tracking-widest text-musgo font-medium'>
                {subtitulo}
            </span>

            <h2 className='font-display text-4xl font-semibold text-cafe-900 mt-3'>
                {titulo}
            </h2>

            {/* 
                 O código abaixo só mostra a descrição de eka existir, ou seja
                 Se eu passar descrição para o componente ele mostra, se não
                 fica sem nada mesmo
            */}

            {descricao && (
                <p className='mt-4 text-cafe-600'>{descricao}</p>
            )}
        </div>
    );
}

export default TituloSecao