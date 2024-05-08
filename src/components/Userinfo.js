import React from "react";


function Userinfo({props}) {
    console.log("This is props")
    console.log(props.user)
    return (
    <div className="details-container">
        <h5>Logged in as {props.given_name}</h5>
        <h5>Family Name : <span>{props.family_name}</span></h5>
        <h5>Given Name : <span>{props.given_name}</span></h5>
        <h5>Email : <span>{props.email}</span></h5>
    </div>
    )
  }
  
  export default Userinfo