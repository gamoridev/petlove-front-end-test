import React from 'react';
import './Input.css';

function Input({ children, cep, setCep }) {
    return (
        <input
            className="Input"            
            type="number" 
            name="cep" 
            pattern="/^[0-9]{8}$/" 
            placeholder="00000000"
            value={cep}
            onChange={setCep}
        />
    );
}

export default Input;