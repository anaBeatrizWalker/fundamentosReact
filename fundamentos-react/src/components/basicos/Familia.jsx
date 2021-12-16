import React from "react";
//import FamiliaMembros from "./FamiliaMembros";

export default props =>{
    return(
        <div>
            {React.cloneElement(props.children, {...props})}
            {/* PARA MAIS ELEMENTOS: */}
            {
                React.Children.map(props.children, child=>{
                    return cloneElement(child, props)
                })
            }
            {/* MELHORANDO: */}
            {
                props.children.map((child)=>{
                    return cloneElement(child, props)
                })
            }
            {/* RESOLVENDO O PROBLEMA DA RENDERIZAÇÃO: */}
            {
                props.children.map((child, i)=>{
                    return cloneElement(child,{...props, key: i})
                })
            }
        </div>
    )
}
/*cloneElement: (só para 1 elemento)clona o elemento; mostra todos os filhos recebidos no componente; mostra as propriedades do pai

Children.map: map recebe todos os filhos e para cada um passa as propriedades
*/