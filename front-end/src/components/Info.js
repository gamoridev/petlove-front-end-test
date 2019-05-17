import React from 'react';

function Info({ data }) {
    return (
        <ul>
            {Object.keys(data).map((e, k) => (
                <li key={k}>
                    {e}: {data[e]}
                </li>
            ))}
        </ul>
    );
}

export default Info;