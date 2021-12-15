import './index.css' //caminho relativo (arquivo na mesma pasta)
import ReactDOM from 'react-dom' //importando o React
import React from 'react'//importando React para usar o JSX
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    //referenciando o arquivo como tag
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do Aluno" 
            aluno="Pedro" 
            nota={9.5}/>
        <ComParametro 
            titulo="Situação do Aluno" 
            aluno="Maria" 
            nota={9.9}/>
    </div>, 
    document.getElementById('root')
)
