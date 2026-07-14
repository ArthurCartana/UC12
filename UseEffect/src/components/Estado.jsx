import React, { useEffect, useState } from 'react'

function Estado() {
  const [nome, setNome] = useState("")

useEffect(() => {
  message();
}, [nome])
function message(){
  alert("Boas vindas!")
}

  return (
    <div>
      <title>{nome}</title>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
    </div>
  )
}

export default Estado