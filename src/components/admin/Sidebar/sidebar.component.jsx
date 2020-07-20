import React from 'react';

import { AiOutlineDashboard, AiOutlineSwitcher, AiOutlineAppstoreAdd, AiOutlinePlusCircle } from 'react-icons/ai';
import { RiUserFollowLine } from 'react-icons/ri'
import { IoIosCreate } from 'react-icons/io';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSideBarSlice } from '../../../Redux/stock/stock.selector';
import { selectUserSlice } from '../../../Redux/user/user.selectors';

class Sidebar extends React.Component{
    render(){
        const { sidebarHidden, user } = this.props;
        let sidebarStyle = {
            border: '1px solid blue'
        }
        if (!sidebarHidden && window.innerWidth < 623) {
            sidebarStyle = {
                transform: 'translateX(7%)'
            }
        }
        return(
            <div className="sidebar" style={sidebarStyle}>
                <div className="sidebar__account">
                    <div className="sidebar__account--avatar"> <RiUserFollowLine className="Sidebar__account--icon"/> </div>
                    <p className="sidebar__account--email">{user.email}</p>
                    <p className="sidebar__account--admin">Admin</p>
                </div>
                <ul className="sidebar__links">
                    <NavLink to="/" className="sidebar__link" >
                        <AiOutlineDashboard className="sidebar__link--icon"/>
                        <div className="sidebar__link--item">Dashboard</div>
                    </NavLink>
                    <NavLink to="/add" className="sidebar__link" activeClassName="sidebar-active">
                        <AiOutlineAppstoreAdd className="sidebar__link--icon"/>
                        <div className="sidebar__link--item">New Product</div>
                    </NavLink>
                    <NavLink to="/create-category" className="sidebar__link" activeClassName="sidebar-active">
                        <AiOutlinePlusCircle className="sidebar__link--icon"/>
                        <div className="sidebar__link--item">New Category</div>
                    </NavLink>
                    <NavLink to="/Create-admin" className="sidebar__link"activeClassName="sidebar-active">
                        <IoIosCreate className="sidebar__link--icon"/>
                        <div className="sidebar__link--item">Create Admin</div>
                    </NavLink>
                    <a href="https://github.com" target="_blank" className="sidebar__link">
                        <AiOutlineSwitcher className="sidebar__link--icon"/>
                        <div className="sidebar__link--item">App</div>
                    </a>
                </ul>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    sidebarHidden: toggleSideBarSlice(state),
    user: selectUserSlice(state)
});


export default connect(mapStateToProps)(Sidebar);