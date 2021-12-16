import './Input.css'
import React, { useState } from "react";

export default props =>{

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(){
        //para mudar o estado
        setValor(e.target.value)//set pega o valor no onchange

    }

    return (
        <div className="input">
            <h2>{valor}</h2>

            <div style={{display: 'flex', flexDirection: 'column'}}>

                <input value={valor} onChange={quandoMudar}/>

                <input value={valor} readOnly/> {/* Componente que não pode mudar, apenas visualizar */}

                <input value={undefined} />{/* Componente não controlado */}
            </div>
        </div>
    )
}