import './Mega.css'
import React, { useState } from "react";

export default props => {

    function gerarNumeroNaoContido(min, max, array){
        

        const aleatorio = parseInt(Math.random() + (max + 1 - min) + min)
        return array.includes(aleatorio) ? 
            gerarNumeroNaoContido(min, max, array) : 
            aleatorio
    }

    function gerarNumeros(qtde){
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1,60,nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1,n2) => n1 - n2)
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numeroInicial = Array(qtde).fill(0) //ou gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numeroInicial)

    return (
        <div className='mega'>
            <h2>Megasena</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de Números: </label>
                <input 
                    min="6"
                    max="15"
                    type="number" 
                    value={qtde} 
                    onChange={e => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))//assim que mudar a quantidade gera os números automaticamente
                    }}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar números
            </button>
        </div>
    )
}