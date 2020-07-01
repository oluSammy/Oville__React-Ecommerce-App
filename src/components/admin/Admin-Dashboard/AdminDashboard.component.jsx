import React from 'react';
import Sidebar from './../Sidebar/sidebar.component';
import DashboardContainer from '../Dashboard-Container/DashboardContainer.components';


const AdminDashboard = () => (
    <div className="admin-dashboard">
        <Sidebar/>
        <DashboardContainer/>
    </div>
);

export default AdminDashboard;