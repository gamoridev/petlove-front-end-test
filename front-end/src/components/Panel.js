import React from 'react';
import './Panel.css';

function Panel({ error, children }) {
	const errorClass = error ? "Panel--error" : "";
    return (
        <section className={`Panel ${errorClass}`}>
            {children}
        </section>
    );
}

export default Panel;