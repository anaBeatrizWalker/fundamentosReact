//Representa a aplicação de todos os Componentes

import Card from "./components/basicos/layout/Card";
import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";

export default _ =>//
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card
            titulo ="Exemplo de Card"/>

        <Aleatorio
            min={0}
            max={100}/>

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