//react
import React from 'react';

//firebase
import { auth } from '../../../firebase/firebase.utils';
import { googleProvider } from './../../../firebase/firebase.utils';

//redux
import { connect } from 'react-redux';


//icons
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoIosLogIn } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import Loader from 'react-loader-spinner';

//css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



class AdminLogin extends React.Component{

    state = {
        email: '',
        password: '',
        loading: false,
        passwordError: '',
        emailError: ''
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value});
    };

    handleSubmit = async event => {
        event.preventDefault();

        try {
            this.setState({
                ...this.state, 
                loading: true,
                emailError: '',
                passwordError: ''
            })
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            console.log('you are now logged in');
            this.setState({
                ...this.state, 
                loading: false,
                email: '',
                password: ''
            });
        } catch (error) {
            this.setState({...this.state, loading: false});
            if (error.code === 'auth/user-not-found'){
                this.setState({...this.state, emailError: 'User Not Found'});  
            } 
            else if (error.code === 'auth/wrong-password'){
                this.setState({...this.state, passwordError: 'Incorrect Password'});  
            } 
        }
    }

    handleGoogleAuth = () => {
        auth.signInWithPopup(googleProvider);
    }

    render(){
        return(
            <div className="auth">
                <div className="auth__container">
                    <h3 className="auth--heading">Log in to your account</h3>
                    <form className="auth__form" onSubmit={this.handleSubmit}>
                        <div className="auth__formGroup">
                            <AiOutlineMail className="auth__formGroup--icon"/>
                            <input className="auth__form-input" type="email" name="email" id="email" placeholder="Email" required
                                value={this.state.email}
                                onChange={this.handleChange}
                            />                            
                        </div>
                        <p className="auth__error-msg">{this.state.emailError}</p>
                        <div className="auth__formGroup">
                            <RiLockPasswordLine className="auth__formGroup--icon"/>
                            <input className="auth__form-input" type="password" name="password" id="password" placeholder="Password" required
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                            <p className="auth__error-msg">{this.state.passwordError}</p>
                        <div className="auth__formGroup">

                            {
                                this.state.loading ? 
                                    <button type="submit" className="auth__submit-btn">                                         
                                        <span style={{marginRight:'1rem'}}>
                                            Wait                                        
                                        </span> 
                                        <Loader
                                            style={{marginTop: '.5rem'}}
                                            type="Oval"
                                            color="#ffffff"
                                            height={20}
                                            width={20}
                                            timeout={0}
                                        />
                                    </button>
                                : 
                                    <button type="submit" className="auth__submit-btn"> 
                                    <IoIosLogIn className="auth__btn-icon"/> 
                                    <span style={{marginRight:'1rem'}}>
                                        Login                                        
                                    </span> 
                                </button>
                            }
                        </div>
                    </form>
                    <div className="auth__formGroup">
                        <button className="auth__google-btn"
                            onClick={this.handleGoogleAuth}
                        > 
                            <FcGoogle className="auth__btn-icon"/> 
                            <span>Login with Google</span> 
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = dispatch => ({

})

export default connect(mapStateToProps)(AdminLogin);