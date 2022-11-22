import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div className="App text-white">
            <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
            })}
            </p>
            <p>
              {' '}
              {dateState.toLocaleDateString('sv-SE', {
                year: 'numeric',
                month: 'numeric',
                 day: 'numeric',
              })}
            </p>
        </div>
    );
}