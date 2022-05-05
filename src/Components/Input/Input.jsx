import React from 'react';

function Input({ lableClass , lable , inputClass , type , placeHolder , register }) {
    return (
        <div>
            <h2 className={lableClass}>{lable}</h2>
            <input className={inputClass} type={type} placeholder={placeHolder} { ...register } />
        </div>
    )
}

export default Input;