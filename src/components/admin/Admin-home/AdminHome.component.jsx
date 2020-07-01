import React from 'react';

import AdminNav from './../Admin-Nav/Admin-Nav.component';
// import AdminSignUpPage from './../admin-signIn-page/AdminSignInPage.component';
import AdminDashboard from './../Admin-Dashboard/AdminDashboard.component';


const AdminHome = () => (
    <div className="admin-container">
        <AdminNav/>
        {/* <AdminSignUpPage/> */}
        <AdminDashboard/>
    </div>
);

export default AdminHome;