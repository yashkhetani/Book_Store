import React from "react";

const User = ({a,userId}) =>{
    return  (
       <React.Fragment>
    <div>User components</div>
    <div>User name{a}</div>
    <div>User id{userId}</div>
    </React.Fragment>);

};

export default User;