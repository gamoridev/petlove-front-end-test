import React from 'react';

function Search({ children, cep, setCep }) {
    return (
        <input 
            type="number" 
            name="cep" 
            id="cep" 
            pattern="/^[0-9]{8}$/" 
            placeholder="00000000"
            value={cep}
            onChange={setCep}
        />
    );
}

export default Search;