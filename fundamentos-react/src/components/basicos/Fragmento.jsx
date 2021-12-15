import React from "react";

export default function Fragmento(){
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>

        /*
        OUTRO JEITO
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>

        COM PROPRIEDADES

        <React.Fragment key="1">
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
        */
    )
}