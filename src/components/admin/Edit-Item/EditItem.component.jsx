import React from 'react';
// import { GoDiffAdded } from 'react-icons/go';
import { FiEdit } from 'react-icons/fi';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProductsSlice } from '../../../Redux/products-page/products.selector';
import { categories } from '../../../Redux/Category/category.selectors';

class EditItem extends React.Component {
    //init empty state
    state = {
        productName: '',
        description: '',
        category: '',
        price: null,
        quantity: null,
        spec1: '',
        spec2: '',
        spec3: '',
        spec4: ''
    }
    
    componentDidMount() {
        //get id of current product
        const { match: { params: {id} }, products } = this.props;

        //search redux store for the product to be edited
        const edit = products.filter(product => product.id === id);
        const { productName, description, category, price, quantity } = edit[0].data;
        
        this.setState({ productName, description, category, price, quantity, spec1: edit[0].data.specifications[0],
                        spec2: edit[0].data.specifications[1], spec3: edit[0].data.specifications[2], spec4: edit[0].data.specifications[3]})
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        const { productName, description, category, price, quantity, spec1, spec2, spec3, spec4 } = this.state;
        return(
            <div className="add-item">
                <h2 className="add-item__heading">
                    <FiEdit/>
                    <span>Edit Item</span>    
                </h2>
                <form className="add-item__form" onSubmit={this.handleSubmit}>
                    <div className="add-item__form--group">
                        <label htmlFor="name" className="add-item__label">Product Name:</label>
                        <input value={productName} onChange={this.handleChange}
                            type="text" name="productName" id="productName" 
                            required className="add-item__input add-item__input--name"
                        />
                    </div>
                    <div className="add-item__form--group add-item__description">
                        <label htmlFor="description" className="add-item__label">Description:</label>
                        <textarea value = {description} onChange={this.handleChange}
                            name="description" id="description" cols="36" rows="6" 
                            required className="add-item__input add-item__input--textarea">
                        </textarea>
                    </div>
                    <div className="add-item__form--group add-item__category">
                        <label htmlFor="category" className="add-item__label">Category:</label>
                        <select value={category} onChange={this.handleChange} id="category" name="category"
                            className="add-item__input add-item__input--category">
                            {
                                this.props.categoryList.map( category => 
                                    <option key={category.categoryName} value={category.categoryName}>{category.categoryName}</option>    
                                )
                            }
                        </select>
                    </div>
                    <div className="add-item__form--number">
                        <div className="add-item__form--group">
                            <label htmlFor="Price" className="add-item__label">Price(&#8358;):</label>
                            <input  value={price} onChange={this.handleChange}
                                type="number" name="price" id="price" required className="add-item__input add-item__input--price"
                            />
                        </div>
                        <div className="add-item__form--group">
                            <label htmlFor="Price" className="add-item__label">Quantity:</label>
                            <input value={quantity} onChange={this.handleChange}
                                type="number" name="quantity" id="quantity" required className="add-item__input add-item__input--qty"
                            />
                        </div>
                    </div>
        
                    {/* <div className="add-item__form--group">
                        <label htmlFor="image" className="add-item__label">Select Image:</label>
                        <input type="file" className="add-item__input--file" style={{color: "red"}}/>
                    </div> */}
                    <div className="add-item__spec">
                        <h5 className="add-item__spec--heading">Add Specification</h5>
                        <div className="add-item__spec--group">
                            <label htmlFor="spec1" className="add-item__label">1: </label>
                            <input value={spec1} onChange={this.handleChange} type="text" name="spec1" id="spec1" className="add-item__input"/>
                        </div>
                        <div className="add-item__spec--group">
                            <label htmlFor="spec2" className="add-item__label">2: </label>
                            <input value={spec2} onChange={this.handleChange} type="text" name="spec2" id="spec2" className="add-item__input"/>
                        </div>
                        <div className="add-item__spec--group">
                            <label htmlFor="spec3" className="add-item__label">3: </label>
                            <input value={spec3} onChange={this.handleChange} type="text" name="spec3" id="spec3" className="add-item__input"/>
                        </div>
                        <div className="add-item__spec--group">
                            <label htmlFor="spec4" className="add-item__label">3: </label>
                            <input value={spec4} onChange={this.handleChange} type="text" name="spec4" id="spec4" className="add-item__input"/>
                        </div>
                    </div>
        
                    <input type="submit" value="Update" className="add-item__upload"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: getProductsSlice(state),
    categoryList: categories(state)
});

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditItem));