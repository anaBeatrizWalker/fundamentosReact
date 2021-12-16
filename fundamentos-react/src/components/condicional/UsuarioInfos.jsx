import React from "react";
import If, { Else } from'./if'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Bem- vindo, {usuario.nome}!
                <Else>
                    Bem- vindo(a), usuário(a)! 
                </Else>
            </If>
        </div>
    )
}