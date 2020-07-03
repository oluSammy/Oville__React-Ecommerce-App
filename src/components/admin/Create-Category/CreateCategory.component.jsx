import React from 'react';
import { IoIosCreate } from "react-icons/io";


const CreateCategory = () => (
    <div className="create-admin">
        <h1 className="create-admin__heading">
            <IoIosCreate/>
            <span>Create Category</span>
        </h1>
        <div className="create-admin__form-group">
            <label htmlFor="category" className="create-admin__label">Category:</label>
            <input type="text" name="category" id="category" className="create-admin__input"/>
        </div>
        <input type="submit" value="Create" className="create-admin__submit"/>
    </div>
);

export default CreateCategory;