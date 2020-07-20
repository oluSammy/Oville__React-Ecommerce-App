import React from 'react';

//icons
import { AiOutlineBank, AiOutlineLogout, AiOutlineSwitcher } from 'react-icons/ai';

//redux
import { connect } from 'react-redux';
import { selectUserSlice } from '../../../Redux/user/user.selectors';
import { toggleSideBar } from '../../../Redux/stock/stock.actions';
import { toggleSideBarSlice } from '../../../Redux/stock/stock.selector';
import { AiOutlineClose } from 'react-icons/ai';

import { Link } from 'react-router-dom';

//firebase
import { auth } from '../../../firebase/firebase.utils';




class AdminNav extends React.Component {

    render() {
        const { currentUser, sidebarHidden, SideBar } = this.props;
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
                        <AiOutlineSwitcher className="admin-nav__links--icon"/> 
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"  style={{color: 'white', textDecoration: 'none'}}>App</a>
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
                            <div>
                                {
                                    sidebarHidden ? 
                                        <li className="admin-nav__btn" onClick={SideBar}>
                                            <div className="admin-nav__hamburger"></div>
                                            <div className="admin-nav__hamburger"></div>
                                            <div className="admin-nav__hamburger"></div>
                                        </li>
                                    : <AiOutlineClose onClick={SideBar} style={{fontSize: '2.5rem', marginTop: '1rem', cursor: 'pointer'}}/>
                                }

                            </div>
                        : ''
                    }
                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: selectUserSlice(state),
    sidebarHidden: toggleSideBarSlice(state)
});

const mapDispatchToProps = dispatch => ({
    SideBar: () => dispatch(toggleSideBar())
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminNav);
