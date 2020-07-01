import React from 'react';

import { AiOutlineUnorderedList } from 'react-icons/ai';

const CategoryList = () => (
    <div className="category-list">
        <h4 className="category-list__heading"> 
            <AiOutlineUnorderedList className="category-list__heading--icon"/> 
            <span>Categories</span> 
        </h4>
        <table className="category-list__table">
            <tr>
                <th>Category</th>
                <th>Item Count</th>
            </tr>
            <tr className="table-row">
                <td>Laptop</td>
                <td>934</td>
                <td><button>View</button></td>
            </tr>
            <tr className="table-row">
                <td>Phones</td>
                <td>934</td>
                <td><button>View</button></td>
            </tr>
            <tr className="table-row">
                <td>Accessories</td>
                <td>934</td>
                <td><button>View</button></td>
            </tr>
        </table>
    </div>
);

export default CategoryList;