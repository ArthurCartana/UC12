import React from 'react'

function Botao({ text, background, func}) {
    return (
        // em JSX, não existe 'class' e sim 'className'
        <button onClick={func} className={background}>{text}</button>
    )
}

export default Botao