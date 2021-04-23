import React from "react";

export default function AddUser(props){
    const { info } = props;
    return (
        <div>
            <h2>Name: {info.username}</h2>
            <p>Email: {info.email}</p>
            <p>Password: {info.password}</p>
        </div>
    )
}