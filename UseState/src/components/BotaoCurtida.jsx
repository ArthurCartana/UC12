import React, { useState } from 'react'

function BotaoCurtida() {
    const [cliques, setCLiques] = useState(0)

    function adicao() {
        setCLiques(cliques + 1)
    }
  return (
    <div>
        <button className={`${cliques >= 100 ? "text-red-500" : "text-white" } p-4 flex gap-2 items-center justify-center`} onClick={adicao}>Curtir {cliques}</button>
    </div>
    )
}

export default BotaoCurtida