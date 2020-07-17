import React from 'react';
import { selectStockSlice } from '../../../Redux/stock/stock.selector';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { connect } from 'react-redux';
import StockRow from '../../Stock-count/StockCount.components';


class CategoryList extends React.Component {
    render(){
        const { stockCount } = this.props;
        return(
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
                    {
                    // get stock count for all stock items
                    stockCount ?
                            stockCount.map(stock => <StockRow stock={stock} key={stock.category}/>)
                        : 
                            'loading'
                    } 
                    
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stockCount: selectStockSlice(state)
})

export default connect(mapStateToProps, null)(CategoryList);