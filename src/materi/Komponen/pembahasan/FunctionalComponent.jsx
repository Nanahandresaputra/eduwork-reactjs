import React, { useState } from 'react';

let FunctionalComponent = ({nama}) => {
    const [value, stateValue] = useState(0);
    let handlePlus = ()=>{
        stateValue(value + 1)
    }
    let handleMinus = ()=>{
        if (value > 0) {stateValue(value - 1)}
    }

    return (
        <div>
            <h1>Membuat FunctionalComponent </h1>
            <h2>selamat belajar {nama}</h2>
            <button onClick={handleMinus}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

FunctionalComponent.defaultProps = {nama: 'saputra'}
export default FunctionalComponent;