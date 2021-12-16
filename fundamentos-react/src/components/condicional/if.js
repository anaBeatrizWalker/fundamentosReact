export default props =>{
    if(props.test){
        return props.children
    }else{
        return false
    }
}
/*
    <If teste={expressão}>
        <span>...</span>
        <span>...</span>
    </If>
*/