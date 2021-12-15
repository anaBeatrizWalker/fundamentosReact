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
            titulo="Segundo Componente" 
            subtitulo="Com paramêtros" />
    </div>, 
    document.getElementById('root')
)
