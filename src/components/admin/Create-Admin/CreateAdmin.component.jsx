import React from 'react';
import { IoIosCreate } from "react-icons/io";
import { firestore } from '../../../firebase/firebase.utils';


class CreateAdmin extends React.Component {

    render(){
        return (
            <div className="create-admin">
                <h1 className="create-admin__heading">
                    <IoIosCreate/>
                    <span>Create Admin</span>
                </h1>
                <form>
                    <div className="create-admin__form-group">
                        <label htmlFor="email" className="create-admin__label">Email:</label>
                        <input
                            type="email" name="email" id="email" className="create-admin__input"
                        />
                    </div>
                    <input type="submit" value="Create" className="create-admin__submit"/>
                </form>
            </div>
        )
    }
}

export default CreateAdmin;