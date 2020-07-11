import React from 'react';

import { AiOutlineDashboard, AiOutlineSwitcher, AiOutlineAppstoreAdd, AiOutlinePlusCircle } from 'react-icons/ai';
import { RiUserFollowLine } from 'react-icons/ri'
import { IoIosCreate } from 'react-icons/io';

import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar">
                <div className="sidebar__account">
                    <div className="sidebar__account--avatar"> <RiUserFollowLine className="Sidebar__account--icon"/> </div>
                    <p className="sidebar__account--email">olumorinsammy@gmail.com</p>
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
                    <NavLink to="items" className="sidebar__link">
                        <AiOutlineSwitcher className="sidebar__link--icon"/>
                        <div className="sidebar__link--item">App</div>
                    </NavLink>
                </ul>
            </div>
        )
    }
};



export default Sidebar;