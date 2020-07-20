import React from 'react';

import AdminDashboard from './../Admin-Dashboard/AdminDashboard.component';

//Redux
import { setUser } from './../../../Redux/user/user.actions';
import { connect } from 'react-redux';


//firebase
import { auth } from '../../../firebase/firebase.utils';

class AdminHome extends React.Component {

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            this.props.setUser(user);
        })
    };

    render(){
        return(
            <div className="admin-container">
                <AdminDashboard/>
            </div>            
        )
    }
};

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
});


// const mapStateTO
export default connect(null, mapDispatchToProps)(AdminHome);