import React from "react";

export default props =>{

    const gerarIdade = ()=> parseInt(Math.random() * (40-60)) + 40
    const gerarNerd = ()=> Math.random() > 0.5

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
            <button onClick={e => props.quandoClicar('Nilson', gerarIdade(), gerarNerd())}>
                Fornecer informações
            </button>
        </div>
    )
}