import React from 'react'

// assim que criamos um componente reutilizável
function Botao({text}) {
    return (
        // em JSX, não existe 'class' e sim 'className'
        <button className="bg-indigo-600 px-2 py-2 rounded text-white hover:bg-indigo-800 transition-all duration-400 cursor-pointer">{text}</button>
    )
}

export default Botao