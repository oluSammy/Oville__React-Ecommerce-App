import React from 'react';
import Stock from '../Stock-tab/Stock.component';
import CategoryList from '../Category-List/CategoryList.component';
// import AddItem from '../Add-Item/AddItem.component';
// import EditItem from './../Edit-Item/EditItem.component';
// import CreateAdmin from './../Create-Admin/CreateAdmin.component';
// import CreateCategory from './../Create-Category/CreateCategory.component';





const DashboardHome = () => (
    <div className="">
        <Stock/>
        <CategoryList/> 
        {/* <AddItem/>
        <EditItem/>
        <CreateAdmin/>
        <CreateCategory/>*/}
    </div>
);

export default DashboardHome;