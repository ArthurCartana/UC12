import React, { useState } from 'react'

function Interruptor() {
    const [estado, setEstado] = useState("desligado")

    function alterar() {
        {estado ==="desligado" ? setEstado("ligado") : setEstado("desligado")}
    }
  return (
    <button onClick={alterar} className={estado ==="desligado" ? "text-gray-500" : "text-yellow-500"}>{estado}</button>
  )
}

export default Interruptor