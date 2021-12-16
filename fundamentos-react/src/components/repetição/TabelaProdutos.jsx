import React from "react";
import produtos from "../../data/produtos";

export default (props) =>{
    const tabela = produtos.map((product) =>{
        return(
            <tr key={product.id} className={i % 2 == 0 ? 'par' : 'impar'}>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>R$ {product.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        )
    })
    return(
        <div className="tabela">
            <table>
                <tr>
                    <th>Código</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                {tabela}
            </table>
        </div>
    )
}