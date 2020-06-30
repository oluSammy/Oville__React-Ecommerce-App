import React from 'react';

import AdminNav from './../Admin-Nav/Admin-Nav.component';
import AdminSignUpPage from './../admin-signIn-page/AdminSignInPage.component';

const AdminHome = () => (
    <div className="admin-container">
        <AdminNav/>
        <AdminSignUpPage/>
    </div>
);

export default AdminHome;