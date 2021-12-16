export default props =>{
    //Encontrando o primeiro filho de If que seja Else
    const elseChild = props.children.filter(child=>{
        return child.type && child.type.name === 'Else'
    })[0]

    //Pega todos os filhos de if que não é Else
    const ifChildren  = props.children.filter(child=>{
        return child !== elseChild
    })

    if(props.test){
        return ifChildren
    }else if(elseChild){
        return elseChild
    }else{
        return false
    }
}

export const Else = props => props.children //componente Else retorna o que for passado a seu filho