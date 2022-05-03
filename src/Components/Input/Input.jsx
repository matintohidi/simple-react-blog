import React from 'react';

function Input({ lableClass , lable , inputClass , type , placeHolder}) {
    return (
        <div>
            <p className={lableClass}>{lable}</p>
            <input className={inputClass} type={type} placeholder={placeHolder} />
        </div>
    )
}

export default Input