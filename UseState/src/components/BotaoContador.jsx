import React, { useState } from 'react'

function BotaoContador() {
    const [cliques, setCliques] = useState(0)

    function adicao() {
        setCliques(cliques + 1)
    }

    function subtrair() {
        setCliques(cliques - 1)
    }

    function limpar() {
        setCliques(0)

    }
  return (
    <div>
        <p>Total: {cliques}</p>
        <button onClick={adicao}>Aumentar</button>
        <button onClick={subtrair} disabled={cliques <= 0}>Diminuir</button>
        <button onClick={limpar}>Limpar</button>
    </div>
    )
}

export default BotaoContador