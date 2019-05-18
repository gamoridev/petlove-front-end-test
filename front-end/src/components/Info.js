import React from 'react';
import './Info.css';

function Info({ data }) {
    return (
        <dl className="Info__list">
            {Object.keys(data).map((e, k) => (
            	<React.Fragment key={k}>
	                <dt className="Info__term">{e}:</dt>
	                <dd className="Info__description">{data[e]}</dd>
            	</React.Fragment>
            ))}
        </dl>
    );
}

export default Info;