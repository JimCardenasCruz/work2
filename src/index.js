/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import {Auth0Provider} from "@auth0/auth0-react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import {LoginButton} from "./views/Login"
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";

ReactDOM.render(
 
    <BrowserRouter>
     <Auth0Provider 
    domain= "dev-bjojj584.us.auth0.com"
    clientId= "CPQbVddb4Ujj8acqhAErqxTE1XvmMNeN"
    redirectUri={"http://localhost:3000/admin/dashboard"}>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Redirect to="/admin/tables" />
      </Switch>
    </Auth0Provider>
    </BrowserRouter>,
    document.getElementById("root")
  
);
