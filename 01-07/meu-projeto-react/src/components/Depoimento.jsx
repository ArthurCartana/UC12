import React from 'react'

function Depoimento({ texto, autor, cargo }) {
    return (
        <div className='bg-creme-claro rounded-2xl p-8 border border-cafe-600 hover:border-cafe-900 transition'>
            <p className='font-display text-lg italic text-cafe-900'>
                {texto}
            </p>

            <div className='mt-6 flex items-center gap-3'>
                {/* Placeholder da imagem */}
                <div className='w-10 h-10 rounded-full bg-cafe-900/10 border-2 border-dashed border-cafe-900/20'></div>
                <div>
                    <p className='text-sm font-semibold text-cafe-900'>{autor}</p>
                    <p className='text-xs text-cafe-600'>{cargo}</p>
                </div>
            </div>
        </div>
    )
}

export default Depoimento