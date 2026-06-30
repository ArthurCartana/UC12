function Card ({foto, titulo, paragrafo, texto}) {
    return (
        <div className="card-um">
            <img src={foto} alt="" />
            <h1>{titulo}</h1>
            <p>{paragrafo}</p>
            <button>{texto}</button>
        </div>
    )
}