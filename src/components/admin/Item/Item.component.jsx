import React from 'react';
import { withRouter } from 'react-router-dom';

const Item = ({data: { description, imgUrl, price, productName, quantity, unitsSold }, id, history}) => (
    <div className="item">
        <div className="item__content">
            <figure className="item__img">
                <img src={`${imgUrl}`} alt=""/>
            </figure>
            <div className="item__details">
                <div className="item__spec">
                    <div className="item__detail "> 
                        <p className="item__detail--name">Name:</p>  
                        <span>{productName}</span>
                    </div>
                
                    <div className="item__detail"> 
                        <p className="item__detail--description">Description:</p>  
                        <span>{limitSentence(description)}</span>
                    </div>
                    <div className="item__detail"> 
                        <p className="item__detail--unit">
                            Units Sold
                        </p>  
                        <span>{ unitsSold ? unitsSold : 0 }</span>
                    </div>
                </div>
                <div className="">
                    <div className="item__detail"> 
                        <p className="item__detail--price">Price:</p>  
                        <span>&#8358; {price}</span>
                    </div>
                    <div className="item__detail"> 
                        <p className="item__detail--qty">Qty:</p>  
                        <span>{ quantity }</span>
                    </div>
                    <button onClick={ () => history.push(`/edit/${id}`)}
                        className="item__btn">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    </div>
);


const limitSentence = (sentence) => {
    const words = sentence.split(" ");

    if(words.length > 20 )
        return `${words.join(" ")}...`;
    return sentence;
}

export default withRouter(Item);
