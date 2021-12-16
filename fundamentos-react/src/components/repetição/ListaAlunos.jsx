import React from "react";
import alunos from '../../data/alunos'

export default props =>{
    {/*
        PEGANDO UM ITEM DA LISTA
        const li1 = (
        <li>
            {alunos[0].id}: {alunos[0].nome} - {alunos[0].nota}
        </li>
    )*/}

    const itens = alunos.map((aluno) =>{
        return (
            <li>
                {aluno.id}: {aluno.nome} - {aluno.nota}
            </li>
        )
    })

    return(
        <div>
            <ul>
                {itens}
            </ul>
        </div>
    )
}