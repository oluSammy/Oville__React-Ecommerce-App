import React from 'react';
import { RiMenuAddLine } from 'react-icons/ri';
import { GoDiffAdded } from 'react-icons/go';

const AddItem = () => (
    <div className="add-item">
        <h2 className="add-item__heading">
            <RiMenuAddLine/>
            <span>Add New Item(s)</span>    
        </h2>
        <form className="add-item__form">
            <div className="add-item__form--group">
                <label htmlFor="name" className="add-item__label">Product Name:</label>
                <input type="text" name="name" id="name" required className="add-item__input add-item__input--name"/>
            </div>
            <div className="add-item__form--group add-item__description">
                <label htmlFor="description" className="add-item__label">Description:</label>
                <textarea name="description" id="description" cols="36" rows="3" required className="add-item__input add-item__input--textarea"></textarea>
            </div>
            <div className="add-item__form--group add-item__category">
                <label htmlFor="category" className="add-item__label">Category:</label>
                <select id="category" className="add-item__input add-item__input--category">
                    <option value="Computer">Computer</option>
                    <option value="Laptop">Laptop</option>
                    <option selected value="Phone">Phone</option>
                </select>
            </div>
            <div className="add-item__form--number">
                <div className="add-item__form--group">
                    <label htmlFor="Price" className="add-item__label">Price(&#8358;):</label>
                    <input type="number" name="price" id="price" required className="add-item__input add-item__input--price"/>
                </div>
                <div className="add-item__form--group">
                    <label htmlFor="Price" className="add-item__label">Quantity:</label>
                    <input type="number" name="quantity" id="quantity" required className="add-item__input add-item__input--qty"/>
                </div>
            </div>

            <div className="add-item__form--group">
                <label htmlFor="image" className="add-item__label">Select Image:</label>
                <input type="file" className="add-item__input--file" style={{color: "red"}}/>
            </div>
            <div className="add-item__spec">
                <h5 className="add-item__spec--heading">Add Specification</h5>
                <div className="add-item__spec--group">
                    <label htmlFor="spec1" className="add-item__label">1: </label>
                    <input type="text" name="spec" id="spec1" className="add-item__input"/>
                </div>
                <div className="add-item__spec--group">
                    <label htmlFor="spec2" className="add-item__label">2: </label>
                    <input type="text" name="spec" id="spec2" className="add-item__input"/>
                </div>
                <div className="add-item__spec--group">
                    <label htmlFor="spec3" className="add-item__label">3: </label>
                    <input type="text" name="spec" id="spec3" className="add-item__input"/>
                </div>

                <a href="google.com" className="add-item__spec--more">
                    <GoDiffAdded/> <span>Add More specs</span>
                </a>
            </div>

            <input type="submit" value="Upload" className="add-item__upload"/>
        </form>
    </div>
);

export default AddItem;