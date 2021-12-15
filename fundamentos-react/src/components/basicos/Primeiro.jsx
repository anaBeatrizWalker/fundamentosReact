import React from "react"

export default function Primeiro(){

    const mensagem = 'Seja bem-vindo(a)'

    return ( //envolver com parentêses para identar dessa forma: 
            <div>
                <h2>Primeiro Componente</h2>
                <p> { mensagem } </p>
            </div>
    )
}