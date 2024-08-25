import React from 'react';
import db from '../assets/db.json';

const WatchComponent = () => {
    const anyWatch = db[0];

    const excludedKeys = ["id", "img", "brand", "name", "price", "color"];

    const formatKey = (key) => {
        return key.charAt(0).toUpperCase() + key.slice(1);
    };

    return (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {Object.entries(anyWatch)
                    .filter(([key]) => !excludedKeys.includes(key))
                    .map(([key, value]) => (
                        <tr key={key} style={{ borderBottom: '1px solid #ccc' }}>
                            <td style={{ padding: '8px', fontWeight: 'bold' }}>{formatKey(key)}:</td>
                            <td style={{ padding: '8px' }}>{value}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default WatchComponent;
