import React from 'react';
import Item from './../Item/Item.component';

const ItemPage = () => (
    <div className="item-page">
        <h1 className="item-page--heading">Showing Results for Lorem ipsum dolor sit amet.</h1>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
);

export default ItemPage;