import React from "react";

export default props =>{
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function(){
                    props.quandoClicar('Nilson', 41, true)
                }
            }>
                Fornecer informações
            </button>
            
            {/* OU */}
            <button onClick={e => props.quandoClicar('Nilson', 41, true)}>
                Fornecer informações
            </button>
        </div>
    )
}