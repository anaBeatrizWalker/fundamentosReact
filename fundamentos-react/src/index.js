import ReactDOM from 'react-dom' //importando o React
import React from 'react'//importando React para usar o JSX

const el = document.getElementById('root')

ReactDOM.render(
    //gerando código a partir do javascript
    <div>
        <strong>Olá react!</strong>
    </div>, 
    el 
)

//OUTRO JEITO

const tag = <strong>Olá react!</strong>

ReactDOM.render(
    <div>
        {tag}
    </div>, 
    document.getElementById('root')
)
