import React from 'react';

import { AiOutlineDashboard, AiOutlineSwitcher, AiOutlineAppstoreAdd, AiOutlinePlusCircle } from 'react-icons/ai';
import { RiUserFollowLine } from 'react-icons/ri'
import { IoIosCreate } from 'react-icons/io';

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar__account">
            <div className="sidebar__account--avatar"> <RiUserFollowLine className="Sidebar__account--icon"/> </div>
            <p className="sidebar__account--email">olumorinsammy@gmail.com</p>
            <p className="sidebar__account--admin">Admin</p>
        </div>
        <ul className="sidebar__links">
            <li className="sidebar__link sidebar-active">
                <AiOutlineDashboard className="sidebar__link--icon"/>
                <div className="sidebar__link--item">Dashboard</div>
            </li>
            <li className="sidebar__link">
                <AiOutlineAppstoreAdd className="sidebar__link--icon"/>
                <div className="sidebar__link--item">New Product</div>
            </li>
            <li className="sidebar__link">
                <AiOutlinePlusCircle className="sidebar__link--icon"/>
                <div className="sidebar__link--item">New Category</div>
            </li>
            <li className="sidebar__link">
                <IoIosCreate className="sidebar__link--icon"/>
                <div className="sidebar__link--item">Create Admin</div>
            </li>
            <li className="sidebar__link">
                <AiOutlineSwitcher className="sidebar__link--icon"/>
                <div className="sidebar__link--item">App</div>
            </li>
        </ul>
    </div>
);

export default Sidebar;