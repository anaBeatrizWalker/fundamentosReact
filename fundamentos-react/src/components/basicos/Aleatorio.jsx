import React from "react";

export default (props) =>{
    const min = props.min
    const max = props.max
    const num = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Sorteando um Número</h2>
            <p>Valor mínimo: {props.min}</p>
            <p>Valor máximo: {props.max}</p>
            <p>Resultado: {num}</p>
        </div>
    )
}
/*
Destructuring (desestruturação = diminuição de código)

Lado esquerdo: chaves para ler infos de um obj

const { min, max } = props
const [a,b] = [1,2] //a=1, b=2
const {c,d,e} = {c: 12, d: 45, e:'teste'}
*/