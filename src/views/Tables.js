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
import {LoginButton} from "./Login.js"
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import { LogoutButton } from "./Logout.js";

function Tables() {
  return (
    <>
      <div className="content">
        <h5 style={{marginLeft:"28%", marginTop:"20%"}}>Haga click aca para logearse y poder visualizar el Dashboard</h5>
        <br></br>
        <LoginButton ></LoginButton>
        <LogoutButton></LogoutButton>
        
      </div>
    </>
  );
}

export default Tables;
