//Representa a aplicação de todos os Componentes

import './App.css'
import Mega from './components/megasena/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfos from './components/condicional/UsuarioInfos';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repetição/TabelaProdutos'
import ListaAlunos from './components/repetição/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembros  from './components/basicos/FamiliaMembros'
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

            <Card titulo ="#13 - Megasena" color="#B9006E">
                <Mega qtde={6}></Mega>
            </Card>

            <Card titulo ="#12 - Contador (Componente de Classe)" color="#424242">
                <Contador numeroInicial={1}></Contador>
            </Card>

            <Card titulo ="#11 - Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo ="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo ="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo ="#08 - Renderização Condicional" color="#982395">

                <ParOuImpar numero={20}></ParOuImpar>

                <UsuarioInfos usuario={{ nome:'Fernando' }}/>
                <UsuarioInfos usuario={{ email:'fer@nando.com' }}/>
                <UsuarioInfos usuario={{}}/>
                <UsuarioInfos/>

            </Card>

            <Card titulo ="#07 - Desafio da Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo ="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo ="#05 - Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembros nome="Pedro"/>
                    <FamiliaMembros nome="Ana"/>
                    <FamiliaMembros nome="Gustavo"/>
                </Familia>
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