import React from 'react';
import { withRouter } from 'react-router-dom';

const StockRow = ({stock, history}) => (
    <tr className="table-row">
        <td style={{textTransform: 'capitalize'}}>{stock.category}</td>
        <td>{stock.count}</td>
        <td>
            <button onClick={() => history.push(`/product/${stock.category.toLowerCase()}`)}>View</button>
        </td>
    </tr>
);

export default withRouter(StockRow);