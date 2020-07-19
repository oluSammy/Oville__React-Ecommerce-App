import React from 'react';

//icons
import { AiOutlineBank, AiOutlineLogout, AiOutlineSwitcher } from 'react-icons/ai';

//redux
import { connect } from 'react-redux';
import { selectUserSlice } from '../../../Redux/user/user.selectors';

import { Link } from 'react-router-dom';

//firebase
import { auth } from '../../../firebase/firebase.utils';



class AdminNav extends React.Component {

    render() {
        const { currentUser } = this.props;
        return(
            <div className="admin-nav">
                <h1 className="admin-nav__logo">Oville Gadgets</h1>
                {/* <NavSearch/> */}
                <ul className="admin-nav__links" style={{marginLeft: 'auto'}}>
                    {
                        currentUser ? 
                            <Link to="/" className="admin-nav__links--item" style={{color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center'}}> 
                                <AiOutlineBank className="admin-nav__links--icon"/> Home
                            </Link>
                        : ''
                    }
                    
                    <li className="admin-nav__links--item"> 
                        <AiOutlineSwitcher className="admin-nav__links--icon"/> App
                    </li>
                    {
                        currentUser ? 
                            <li className="admin-nav__links--item" onClick={() => auth.signOut()}> 
                                <AiOutlineLogout className="admin-nav__links--icon"/> Sign Out
                            </li>
                        : ''
                    }
                    {
                        currentUser ? 
                            <li className="admin-nav__btn">
                                <div className="admin-nav__hamburger"></div>
                                <div className="admin-nav__hamburger"></div>
                                <div className="admin-nav__hamburger"></div>
                            </li>
                        : ''
                    }
                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: selectUserSlice(state)
})

export default connect(mapStateToProps, null)(AdminNav);
