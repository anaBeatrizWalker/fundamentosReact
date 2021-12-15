//Representa a aplicação de todos os Componentes

import './App.css'
import Card from "./components/basicos/layout/Card";
import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";

export default _ =>
    <div className="app">
        <h1>Fundamentos React</h1>

        <div className="exercicios">
            <Card
                titulo ="#04 - Desafio do Número Aleatório">
                <Aleatorio min={0} max={100}/>
            </Card>

            <Card
                titulo ="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card
                titulo ="#02 - Componente com Paramêtro">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.5} />
            </Card>

            <Card
                titulo ="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>