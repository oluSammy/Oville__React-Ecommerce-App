import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';


const NavSearch = () => (
    <form className="nav-search">
        <input type="search" className="nav-search__input" placeholder="Search 78000+ items"/>
        <div type="submit" className="nav-search__submit">
            <AiOutlineSearch className="nav-search__submit--icon" />
        </div>
    </form>
);

export default NavSearch;