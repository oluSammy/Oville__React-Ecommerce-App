import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { withRouter } from 'react-router-dom';


class NavSearch extends React.Component {
    state = {
        searchKeyWord: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { history } = this.props;
        history.push(`/search/${this.state.searchKeyWord}`);
        this.setState({ searchKeyWord: ''})
        window.location.reload(false);
    }

    
    render() {
        const { history } = this.props;
        return (
            <form className="nav-search" onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChange}
                    type="search" className="nav-search__input" name="searchKeyWord" value={this.state.searchKeyWord}
                    placeholder="Search 78000+ items" required
                />
                <div type="submit" className="nav-search__submit">
                    <AiOutlineSearch className="nav-search__submit--icon" />
                </div>
            </form>
        )
    }
}



export default withRouter(NavSearch);