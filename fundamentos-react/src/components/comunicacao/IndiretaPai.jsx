import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props =>{
    const [nome, setNome] = useState('?')//valor, função = valor inicial
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInfos(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome}</span>
                <span>{idade}</span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInfos}></IndiretaFilho>
        </div>
    )
}