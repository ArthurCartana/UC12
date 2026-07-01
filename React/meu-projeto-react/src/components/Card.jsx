import React from 'react'

function Card ({card, foto, titulo, paragrafo, texto}) {
    return (
        <div className={card}>
            <img src={foto} alt="" />
            <h1>{titulo}</h1>
            <p>{paragrafo}</p>
            <button>{texto}</button>
        </div>
    )
}

export default Card