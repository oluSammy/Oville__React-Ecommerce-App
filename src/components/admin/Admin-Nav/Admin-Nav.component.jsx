import React from 'react';


import NavSearch from './../../NavSearch/NavSearch.components';

//icons
import { AiOutlineBank, AiOutlineLogin, AiOutlineLogout, AiOutlineSwitcher } from 'react-icons/ai';

const AdminNav = () => (
    <div className="admin-nav">
        <h1 className="admin-nav__logo">Oville Gadgets</h1>
        <NavSearch/>
        <ul className="admin-nav__links">
            <li className="admin-nav__links--item"> 
                <AiOutlineBank className="admin-nav__links--icon"/> Home
            </li>
            <li className="admin-nav__links--item"> 
                <AiOutlineSwitcher className="admin-nav__links--icon"/> App
            </li>
            <li className="admin-nav__links--item"> 
                <AiOutlineLogin className="admin-nav__links--icon"/> Log In
            </li>
        </ul>
    </div>
);

export default AdminNav;
