import React from 'react';
import { connect } from 'react-redux';
import { selectStockSlice } from '../../../Redux/stock/stock.selector';
import { asyncGetStockCount } from '../../../Redux/stock/stock.actions';
import { Link } from 'react-router-dom';


class Stock extends React.Component {
    
    //get stock count
    async componentDidMount(){
         await this.props.getStockCount();
    }

    render(){
        return (
            <div className="stock">
                <div className="stock__count">
                    <span className="stock__count--number">
                        {/* //calculate sum of all stock */}
                        {
                            this.props.stock ? 
                            this.props.stock.reduce((acc, value) => {
                                    return acc + value.count
                                }, 0)
                            : '...'
                        }
                    </span>
                    <span className="stock__count--text">Items Available</span>
                </div>
                <div className="stock__xx">
                    <h2 className="stock__heading"> Stock</h2>
                    <Link to="/add" className="stock__action">Add New Item</Link>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    getStockCount: () => dispatch(asyncGetStockCount())
});

const mapStateToProps = state => ({
    stock: selectStockSlice(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(Stock);