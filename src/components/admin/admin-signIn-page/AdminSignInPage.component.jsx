import React from 'react';

import AdminLogin from '../Admin-login/AdminLogin.component';
import AdminNav from './../Admin-Nav/Admin-Nav.component';


const AdminSignUpPage = () => (
    <div className="admin-signin">
        <AdminNav/>
        <AdminLogin/>
    </div>
);

export default AdminSignUpPage;