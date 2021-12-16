import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props =>{
    return (
        <div>
            <DiretaFilho nome="Ana Beatriz" idade={20} nerd={false}></DiretaFilho>
            <DiretaFilho nome="Gustavo" idade={21} nerd={true}></DiretaFilho>
        </div>
    )
}