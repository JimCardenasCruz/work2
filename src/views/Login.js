import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import './login.css'

export const LoginButton = () =>{
    const {loginWithRedirect } = useAuth0();
    return <button style={{marginRight:"20px", marginLeft:"43%"}} className="btn btn-success" onClick={() => loginWithRedirect()}>Login</button>
}