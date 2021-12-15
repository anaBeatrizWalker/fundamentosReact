//Representa a aplicação de todos os Componentes

import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>//
    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={9.5} />
        <Primeiro></Primeiro>
    </div>
/*Obs: 
underline: função de apenas um parametro não obrigatório;
as chaves podem ser retiradas junto com o return*/