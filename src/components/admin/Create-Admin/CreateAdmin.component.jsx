import React from 'react';
import { IoIosCreate } from "react-icons/io";


const CreateAdmin = () => (
    <div className="create-admin">
        <h1 className="create-admin__heading">
            <IoIosCreate/>
            <span>Create Admin</span>
        </h1>
        <div className="create-admin__form-group">
            <label htmlFor="email" className="create-admin__label">Email:</label>
            <input type="email" name="email" id="email" className="create-admin__input"/>
        </div>
        <input type="submit" value="Create" className="create-admin__submit"/>
    </div>
);

export default CreateAdmin;