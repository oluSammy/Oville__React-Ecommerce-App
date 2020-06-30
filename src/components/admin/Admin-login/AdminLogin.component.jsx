import React from 'react';

//icons
import { AiOutlineMail, AiOutlineGoogle } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoIosLogIn } from 'react-icons/io';

const AdminLogin = () => (
    <div className="auth">
        <div className="auth__container">
            <h3 className="auth--heading">Log in to your account</h3>
            <form className="auth__form">
                <div className="auth__formGroup">
                    <AiOutlineMail className="auth__formGroup--icon"/>
                    <input className="auth__form-input" type="email" name="email" id="email" placeholder="Email" required/>
                </div>
                <div className="auth__formGroup">
                    <RiLockPasswordLine className="auth__formGroup--icon"/>
                    <input className="auth__form-input" type="password" name="password" id="password" placeholder="Password"/>
                </div>
                <div className="auth__formGroup">
                    <button type="submit" className="auth__submit-btn"> <IoIosLogIn className="auth__btn-icon"/> <span>Login</span> </button>
                </div>
            </form>
            <div className="auth__formGroup">
                <button className="auth__google-btn"> <AiOutlineGoogle className="auth__btn-icon"/> <span>Login with Google</span> </button>
            </div>
        </div>
    </div>
);

export default AdminLogin;