import React from 'react';

import AdminNav from './../Admin-Nav/Admin-Nav.component';
import AdminDashboard from './../Admin-Dashboard/AdminDashboard.component';

//Redux
import { setUser } from './../../../Redux/user/user.actions';
import { connect } from 'react-redux';

//Redux Selectors
import { selectUserSlice } from './../../../Redux/user/user.selectors';

//firebase
import { auth } from '../../../firebase/firebase.utils';

class AdminHome extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            this.props.setUser(user);
        })
    };

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render(){
        return(
            <div className="admin-container">
                <AdminNav/>
                <AdminDashboard/>
            </div>            
        )
    }
};

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
});

const mapStateToProps = state => ({
    currentUser: selectUserSlice(state)
});

// const mapStateTO
export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);