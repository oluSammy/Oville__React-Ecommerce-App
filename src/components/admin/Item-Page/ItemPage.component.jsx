import React from 'react';
import Item from './../Item/Item.component';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
    const { id } = useParams();
    return(
        <div className="item-page">
            <h1 className="item-page--heading">Showing Results for {id}</h1>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>

    )
} 
export default ItemPage;