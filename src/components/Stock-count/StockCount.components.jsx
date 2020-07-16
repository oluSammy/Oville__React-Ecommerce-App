import React from 'react';

const StockRow = ({stock}) => (
    <tr className="table-row">
        <td>{stock.category}</td>
        <td>{stock.count}</td>
        <td><button>View</button></td>
    </tr>
);

export default StockRow;