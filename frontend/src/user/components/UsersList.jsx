import React from "react";
import Users from "../pages/Users";
import UserItem from "./UserItem";

import './UserList.css';
const UserLust = props =>{
    if (props.items.length === 0)
    {
        return(
            <div>
                <h2>No users found!</h2>
            </div>
        );
    }
    return
        <ul> 
            { props.items.map(user => (
                <UserItem 
                key={user.id} 
                id={user.id} 
                image = {user.image} 
                name = {user.name} 
                placeCount = {user.places}/>
            ))}
        </ul>
};

export default UserList;