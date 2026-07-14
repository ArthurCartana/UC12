import React, { useState } from 'react'

function Interruptor() {
    const [estado, setEstado] = useState('ligado')

    function alterar() {
        {estado === 'ligado' ? setEstado('desligado') : setEstado('ligado') }
    }
  return (
    <div>
        <button className={`${estado === 'ligado' ? "text-yellow-400" : "text-gray-500"}`} onClick={alterar}>{estado}</button>
    </div>
  )
}

export default Interruptor