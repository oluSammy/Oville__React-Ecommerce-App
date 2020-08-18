import React from 'react';
import Sidebar from './../Sidebar/sidebar.component';


import Stock from '../Stock-tab/Stock.component';
import CategoryList from '../Category-List/CategoryList.component';
import EditItem from './../Edit-Item/EditItem.component';
// import CreateAdmin from './../Create-Admin/CreateAdmin.component';
import CreateCategory from './../Create-Category/CreateCategory.component';
import AddItem from '../Add-Item/AddItem.component';
import ItemPage from '../Item-Page/ItemPage.component';
import AdminSignUpPage from '../admin-signIn-page/AdminSignInPage.component';



//React Router
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { asyncGetStockCount } from '../../../Redux/stock/stock.actions';

//Redux Selectors
import { selectUserSlice } from './../../../Redux/user/user.selectors';
import AdminNav from './../Admin-Nav/Admin-Nav.component';




class AdminDashboard extends React.Component {

    //get stock count
    async componentDidMount(){
         await this.props.getStockCount();
    }

    render() {
        return(       
            //render page if user is logged in else render the sign in page            
            this.props.currentUser ? 
            <Router>    
                <AdminNav/>
                <div className="admin-dashboard">
                    <Sidebar/>
                    <div className="dashboard-container">
                        <Switch>
                            <Route exact path="/Oville__React-Ecommerce-App" render={()=> {return <div>
                                <Stock/>
                                <CategoryList/>
                            </div>}}/>       
                            <Route exact path="/add" component = {AddItem}/>       
                            {/* <Route exact path="/Create-admin" component = {CreateAdmin}/> */}
                            <Route exact path="/create-category" component = {CreateCategory}/>       
                            <Route exact path="/edit/:id" component = {EditItem}/>       
                            <Route exact path="/product/:id" component ={ItemPage} />
                        </Switch>
                    </div>
                </div>
            </Router>
            : 
            <AdminSignUpPage/>
        )
    }
} 

const mapStateToProps = state => ({
    currentUser: selectUserSlice(state)
});

const mapDispatchToProps = dispatch => ({
    getStockCount: () => dispatch(asyncGetStockCount())
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);