import './Contador.css'
import React from "react";
import Display from './Display';
import Botoes from './Botoes';
import Form from './Form';

export default class Contador extends React.Component{
    //Estado
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1,
    }
    //Arrow function evita o problema de quando a função é chamada com this
    increment = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    decrement = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    //Mudar passo
    setPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso,
        })
    }
    //Renderização
    render(){
        return (
            <div className='contador'>
                <h2>Contador</h2>
                
                <Display numero={this.state.numero}></Display>

                <Form passo={this.state.passo} setPasso={this.setPasso}/>

                <Botoes incrementar={this.increment} decrementar={this.decrement}/>
            </div>
        )
    }
}