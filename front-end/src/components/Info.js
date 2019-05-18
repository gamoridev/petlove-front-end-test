import React from 'react';
import './Info.css';

function Info({ data }) {
    let orderedObject = {};
    orderedObject.cep = { value: data.cep.replace(/-/g, ""), label: 'CEP', order: 0 }
    orderedObject.uf = { value: data.uf, label: 'Estado', order: 1 }
    orderedObject.localidade = { value: data.localidade, label: 'Cidade', order: 2 }
    orderedObject.logradouro = { value: data.logradouro, label: 'Logradouro', order: 3 }

    return (
        <dl className="Info__list">
            { Object.keys(orderedObject).sort((a, b) => (orderedObject[a].order > orderedObject[b].order) ? 1 : -1)
                .map((e, k) => {
                    return (
                    	<React.Fragment key={k}>
        	                <dt className="Info__term">{orderedObject[e].label}:</dt>
        	                <dd className="Info__description">{orderedObject[e].value}</dd>
                    	</React.Fragment>
                    )   
            })}
        </dl>
    );
}

export default Info;