import React, { Component} from 'react';
import Item from './../Item/Item.component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { asyncGetProducts } from './../../../Redux/products-page/products.actions';
import { isGettingProducts, getProductsSlice } from './../../../Redux/products-page/products.selector';

class ItemPage extends Component {
    componentDidMount(){
        const { match: { params: {id} }, getProducts } = this.props;
        getProducts(id);
    }
    render() {
        const { match: { params: {id} }, products} = this.props;
        console.log(products);
        return(
            <div className="item-page">
                <h1 className="item-page--heading">Showing Results for {id}</h1>
                {
                    products ? 
                        products.map(product => <Item key={product.id} id={product.id} data={product.data}/>)
                    :
                        "loading"
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: getProductsSlice(state),
    isGettingProducts: isGettingProducts(state)
});

const mapDispatchToProps = dispatch => ({
    getProducts: (category) => dispatch(asyncGetProducts(category))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemPage));