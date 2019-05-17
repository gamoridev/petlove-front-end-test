import React from 'react';

function Panel({ children }) {
    return (
        <section className="panel">
            {children}
        </section>
    );
}

export default Panel;