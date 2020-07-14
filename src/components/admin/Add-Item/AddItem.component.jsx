import React from 'react';
import { RiMenuAddLine } from 'react-icons/ri';
import { connect } from 'react-redux';
import { categories } from '../../../Redux/Category/category.selectors';
import { asyncGetCategory } from '../../../Redux/Category/category.actions';
import { isAddingNewProduct } from '../../../Redux/newItem/new-item.selectors';
import { asyncUpLoadNewProducts } from '../../../Redux/newItem/new-item.actions';
import Loader from 'react-loader-spinner';



class AddItem extends React.Component{
    state = {
        productName: '',
        description: '',
        category: '',
        price: '',
        qty: '',
        img: null,
        categoryList: null,
        spec1: '',
        spec2: '',
        spec3: '',
        spec4: ''
    }

    async componentDidMount(){
      await this.props.getCategoryList();
      this.setState({
          ...this.state,
          categoryList: this.props.categories
      })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log(this.state)
        this.props.uploadNewProducts(this.state);
        this.setState({
            ...this.state,
            productName: '',
            description: '',
            category: '',
            price: '',
            qty: '',
            spec1: '',
            spec2: '',
            spec3: '',
            spec4: ''
        });
    }

    handleFileChange = event => {
        this.setState({...this.state, img: event.target.files[0]})
    }

    render(){
        const { productName, description, category, price, qty, spec1, spec2, spec3, spec4 } = this.state;
        return (
        <div className="add-item">
            <h2 className="add-item__heading">
                <RiMenuAddLine/>
                <span>Add New Item(s)</span>    
            </h2>
            <form className="add-item__form" onSubmit={this.handleSubmit}>
                <div className="add-item__form--group">
                    <label htmlFor="name" className="add-item__label">Product Name:</label>
                    <input value={productName} onChange={this.handleChange}
                        type="text" name="productName" id="name" required className="add-item__input add-item__input--name"
                    />
                </div>
                <div className="add-item__form--group add-item__description">
                    <label htmlFor="description" className="add-item__label">Description:</label>
                    <textarea value={description} onChange={this.handleChange}
                        name="description" id="description" cols="36" rows="3" required 
                        className="add-item__input add-item__input--textarea">
                    </textarea>
                </div>
                <div className="add-item__form--group add-item__category">
                    <label htmlFor="category" className="add-item__label">Category:</label>
                    <select value={category} onChange={this.handleChange}
                        id="category" name="category" className="add-item__input add-item__input--category">
                        <option >Select Category</option>
                        {
                            this.state.categoryList ? 
                                this.state.categoryList.map(category => 
                                    <option key={category.categoryName} value={category.categoryName}>{category.categoryName}</option>                                    
                                )
                            : 
                            <option value="Computer">Loading...</option> 
                        }
                    </select>
                </div>
                <div className="add-item__form--number">
                    <div className="add-item__form--group">
                        <label htmlFor="Price" className="add-item__label">Price(&#8358;):</label>
                        <input value={price} onChange={this.handleChange}
                            type="number" name="price" id="price" required className="add-item__input add-item__input--price"
                        />
                    </div>
                    <div className="add-item__form--group">
                        <label htmlFor="qty" className="add-item__label">Quantity:</label>
                        <input value={qty} onChange={this.handleChange}
                            type="number" name="qty" id="qty" required className="add-item__input add-item__input--qty"
                        />
                    </div>
                </div>
    
                <div className="add-item__form--group">
                    <label htmlFor="image" className="add-item__label">Select Image:</label>
                    <input onChange={this.handleFileChange} 
                        type="file" className="add-item__input--file" style={{color: "red"}} required
                        accept="image/png, image/jpeg, image/jpg, image/webp"
                    />
                </div>
                <div className="add-item__spec">
                    <h5 className="add-item__spec--heading">Add Specification</h5>
                    <div className="add-item__spec--group">
                        <label htmlFor="spec1" className="add-item__label">1: </label>
                        <input value={spec1} onChange={this.handleChange}
                            type="text" name="spec1" id="spec1" className="add-item__input"
                        />
                    </div>
                    <div className="add-item__spec--group">
                        <label htmlFor="spec2" className="add-item__label">2: </label>
                        <input value={spec2} onChange={this.handleChange}
                            type="text" name="spec2" id="spec2" className="add-item__input"
                        />
                    </div>
                    <div className="add-item__spec--group">
                        <label htmlFor="spec3" className="add-item__label">3: </label>
                        <input value={spec3} onChange={this.handleChange}
                            type="text" name="spec3" id="spec3" className="add-item__input"
                        />
                    </div>
                    <div className="add-item__spec--group">
                        <label htmlFor="spec4" className="add-item__label">4: </label>
                        <input  value={spec4} onChange={this.handleChange}
                            type="text" name="spec4" id="spec4" className="add-item__input"
                        />
                    </div>
                </div>

                {
                    this.props.isAddingNewProduct ? 
                        <div style={{marginTop: "2rem", display: "flex", alignItems: 'center'}}>
                            <input style={{marginRight: '2rem'}} value="Uploading" className="add-item__upload"/>
                            <Loader
                                    type="Oval"
                                    color="#006400"
                                    height={50}
                                    width={50}
                                    timeout={0}                
                                />
                        </div> :
                        <div style={{marginTop: "2rem", display: "flex", alignItems: 'center'}}>
                            <input style={{marginRight: '2rem'}} type="submit" value="Upload" className="add-item__upload"/>
                        </div>
                }
            </form>
        </div>
        );
    }
};

const mapStateToProps = state => ({
    categories: categories(state),
    isAddingNewProduct: isAddingNewProduct(state)
});

const mapDispatchToProps = dispatch => ({
    getCategoryList: () => dispatch(asyncGetCategory()),
    uploadNewProducts: (products) => dispatch(asyncUpLoadNewProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);