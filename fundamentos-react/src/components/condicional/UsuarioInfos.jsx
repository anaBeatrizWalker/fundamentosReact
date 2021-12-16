import React from "react";
import If from'./if'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Bem- vindo, {usuario.nome}!
            </If>

            <If test={!usuario || !usuario.nome}>
                Bem- vindo(a), usuário(a)!
            </If>
        </div>
    )
}