import React from 'react';

export const TextInput = ({onChange, placeholder, value}) => {
    const onChangeHandler = (event) => onChange(event.target.value);

    return <input 
        className="input" 
        type="text" 
        placeholder={placeholder} 
        value={value} 
        onChange={onChangeHandler} 
    />;
};