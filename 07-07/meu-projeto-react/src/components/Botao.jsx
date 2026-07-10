import { useState } from "react";
import React from "react";

function Botao() {

    const [contador, setContador] = useState(0);
    const [curtida, setCurtida] = useState(0);

    function aumentar() {

        setContador(contador + 1);

    }

    function diminuir() {

        setContador(contador - 1);
    }

    function reset() {
        setContador(0);
    }

    function curtir() {
        setCurtida(curtida + 1);

    }



    return (

        <>
            <h1>Exercício 1</h1>
            <h1>{contador}</h1>

            <button onClick={aumentar}>
                +
            </button>

            <button onClick={diminuir} disabled={contador <= 0}>
                -
            </button>

            <button onClick={reset}>
                Reset
            </button>
            <hr />

            <h1>Exercício 2</h1>
            <h1 className={curtida <= 99 ? 'text-black' : 'text-red'}>♡ {curtida} <button onClick={curtir}>Curtir</button></h1>
            <hr />
            <h1>Exercício 3</h1>


        </>

    );

}

export default Botao;