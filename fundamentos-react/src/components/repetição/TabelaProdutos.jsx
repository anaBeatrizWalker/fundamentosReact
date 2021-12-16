import React from "react";
import produtos from "../../data/produtos";

export default (props) =>{
    const tabela = produtos.map((product) =>{
        return(
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>{product.preco}</td>
            </tr>
        )
    })
    return(
        <div>
            <table>
                <tr>
                    <td>Código</td>
                    <td>Produto</td>
                    <td>Preço</td>
                </tr>
                {tabela}
            </table>
        </div>
    )
}