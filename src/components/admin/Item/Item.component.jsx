import React from 'react';

const Item = () => (
    <div className="item">
        <div className="item__content">
            <figure className="item__img">
                <img src={require('../../../assets/img/sample_computer.jpg')} alt=""/>
            </figure>
            <div className="item__details">
                <div className="item__spec">
                    <div className="item__detail "> 
                        <p className="item__detail--name">Name:</p>  
                        <span>Hp EliteBook</span>
                    </div>
                
                    <div className="item__detail"> 
                        <p className="item__detail--description">Description:</p>  
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, aliquid?</span>
                    </div>
                    <div className="item__detail"> 
                        <p className="item__detail--unit">Units Sold:</p>  
                        <span>651</span>
                    </div>
                </div>
                <div className="">
                    <div className="item__detail"> 
                        <p className="item__detail--price">Price:</p>  
                        <span>&#8358; 9000.00</span>
                    </div>
                    <div className="item__detail"> 
                        <p className="item__detail--qty">Qty:</p>  
                        <span>90</span>
                    </div>
                    <button className="item__btn">Edit</button>
                </div>
            </div>
        </div>
    </div>
);

export default Item;
