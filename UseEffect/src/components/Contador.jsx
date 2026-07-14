import React, { useEffect, useState } from 'react'

function Contador({title, contador, setContador}) {

  return (
    <div>
        <h1>{contador}</h1>
        {contador >= 30 && (
            <p>Chegou a trinta!</p>
        )}
        <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  )
}

export default Contador