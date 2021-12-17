import './Contador.css'
import React from "react";

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
    setPasso = (evento) =>{
        this.setState({
            passo: evento.target.value
        })
    }
    //Renderização
    render(){
        return (
            <div className='contador'>
                <h2>Contador</h2>
                <p>{this.state.numero}</p>
                <div>
                    <label htmlFor="passo">Passo: </label>
                    <input id="passo" type="number" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={this.increment}>Incrementar</button>
                <button onClick={this.decrement}>Decrementar</button>
            </div>
        )
    }
    /* OU
    constructor(props){
        super(props)

        this.state = {
            numero: props.numeroInicial
        }
    }*/
}