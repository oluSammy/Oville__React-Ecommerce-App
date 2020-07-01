import React from 'react';

const Stock = () => (
    <div className="stock">
        <div className="stock__count">
            <span className="stock__count--number"> 1198</span>
            <span className="stock__count--text">Items Available</span>
        </div>
        <div className="stock__xx">
            <h2 className="stock__heading"> Stock</h2>
            <button className="stock__action">Add New Item</button>
        </div>
    </div>
);

export default Stock;