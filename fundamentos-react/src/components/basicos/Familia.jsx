import React from "react";
import FamiliaMembros from "./FamiliaMembros";

export default props =>{
    return(
        <div>
            <FamiliaMembros nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembros nome="Ana" {...props}/>
            <FamiliaMembros nome="Gustavo" sobrenome="Silva"/>
        </div>
    )
}

/*Explicando:
O parâmetro do componente pai não é passado para o componente filho, como resolver:
1) sobrenome={props.sobrenome}
2) com spread: todos os parâmetros do componente pai são passados para o filho
 */