import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route,IndexRoute } from 'react-router';
import Index from './components/index/Index.jsx';
import App from './components/App.jsx';
import Login from "./components/users/Login.jsx";
import Register from "./components/users/Register.jsx";
import ProductList from "./components/product/ProductList.jsx";
import Purchase from "./components/product/Purchase.jsx";
import Assets from "./components/users/Assets.jsx";
import Invite from "./components/users/Invite.jsx";
import TransactionRecord from "./components/users/TransactionRecord.jsx";
import AboutUs from "./components/users/AboutUs.jsx";
import PersonalSetting from "./components/users/PersonalSetting.jsx";
import PurchaseAmount from "./components/product/PurchaseAmount.jsx";


//var DefaultRoute = Router.DefaultRoute;

let routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/index"             component={Index}/>
            <Route path="/login"             component={Login}/>
            <Route path="/register"          component={Register}/>
            <Route path="/productList"       component={ProductList}/>
            <Route path="/purchase"          component={Purchase}/>
            <Route path="/purchaseAmount"    component={PurchaseAmount}/>
            <Route path="/assets"            component={Assets}/>
            <Route path="/invite"            component={Invite}/>
            <Route path="/transactionRecord" component={TransactionRecord}/>
            <Route path="/aboutUs"           component={AboutUs}/>
            <Route path="/personalSetting"   component={PersonalSetting}/>
        </Route>
    </Router>
);

main();

function main() {
    ReactDom.render(routes, document.getElementById('app'));
}

