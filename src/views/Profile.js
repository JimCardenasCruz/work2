import React from "react";
import {useAuth0 } from "@auth0/auth0-react";

export const Profile = () =>{
    const {user, isAuthenticated, isLoading} = useAuth0();
    
    if (isLoading) {
        return <div>Loading</div>
    }
    return (
            isAuthenticated && (
                <div class= "row" style={{height: "20px", width: "400px"}}>
                    <div class= "column">
                    <img  style={{height: "50px", marginTop:"5px"}} src={user.picture} alt={user.name}></img>
                    </div>
                    <div style={{marginLeft:"50px", marginTop:"15px"}} class= "column">
                        <h5>{user.name}</h5>
                    </div>
                </div>
            )
    )
}