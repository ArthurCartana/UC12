import React, { useState } from 'react'

function BotaoTema({funcao, tema}) {


    
  return (
    <div>
        <button onClick={funcao}>{tema}</button>
    </div>
  )
}

export default BotaoTema