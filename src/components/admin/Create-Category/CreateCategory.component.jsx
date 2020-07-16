import React from 'react';
import { IoIosCreate } from "react-icons/io";
import { connect } from 'react-redux';
import { creatingCategorySlice } from '../../../Redux/Category/category.selectors';
import { selectCategoryErrMsgSlice } from '../../../Redux/Category/category.selectors';
import { asyncCreateCategory } from '../../../Redux/Category/category.actions';
import Loader from 'react-loader-spinner';




class CreateCategory extends React.Component {
    state = {
        category: ''
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        //dispatch create category from redux and reset form
        this.props.createCategory(this.state.category);
        this.setState({category: ''})
    }

    render(){
        return(
            <div className="create-admin">
                <h1 className="create-admin__heading">
                    <IoIosCreate/>
                    <span>Create Category</span>
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="create-admin__form-group">
                        <label htmlFor="category" className="create-admin__label">Category:</label>
                        <input 
                            onChange={this.handleChange}
                            type="text" name="category" id="category" className="create-admin__input" required value={this.state.category}/>
                    </div>
                    <div style={{display: "flex"}}>
                        <input type="submit" value="Create" className="create-admin__submit" style={{marginRight: "1rem"}}/>
                        {
                            this.props.isCreating ? 
                                <Loader
                                    style={{marginTop: '.5rem'}}
                                    type="Puff"
                                    color="#FF0000"
                                    height={20}
                                    width={20}
                                    timeout={0}
                                /> :
                                ''
                        }
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isCreating: creatingCategorySlice(state),
    errMsg: selectCategoryErrMsgSlice(state)
})

const mapDispatchToProps = dispatch => ({
    createCategory: category => dispatch(asyncCreateCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategory);