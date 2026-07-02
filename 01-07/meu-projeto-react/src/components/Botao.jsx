import React from 'react'

function Botao({ texto, variante = "primario", href }) {
    const estilos = {
        primario: "bg-terracota text-creme-claro hover:bg-terracota-escuro",
        secundario: "bg-transparent text-cafe-900 border-2 border-cafe-900 hover:bg-cafe-900 hover:text-creme-claro",
    };
    return (
        <a href={href} className={`inline-block px-6 py-3 rounded-full font-body font-medium transition duration-300 ${estilos[variante]}`}>
            {texto}
        </a>
    );
}

export default Botao