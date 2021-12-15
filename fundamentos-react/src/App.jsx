//Representa a aplicação de todos os Componentes

import './App.css'
import Familia from './components/basicos/Familia';
import Card from "./components/layout/Card";
import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";

export default _ =>
    <div className="app">
        <h1>Fundamentos React</h1>

        <div className="exercicios">

            <Card titulo ="#05 - Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira"/>
            </Card>

            <Card titulo ="#04 - Desafio do Número Aleatório" color="#FA6900">
                <Aleatorio min={0} max={100}/>
            </Card>

            <Card titulo ="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo ="#02 - Componente com Paramêtro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.5} />
            </Card>

            <Card titulo ="#01 - Primeiro Componente" color="#588C73"> 
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>