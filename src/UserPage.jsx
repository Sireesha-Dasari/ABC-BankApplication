import React, { Fragment, useState, useEffect } from 'react';

function Userpage(props) {
     useEffect(() => {
        let user = sessionStorage.getItem("user");
        user = JSON.parse(user);
        props.history.push(`/users/${user.id}`);
        console.log(user);
    }, []);

    return (
        <div className="userpage">
            <h1>User page</h1>
        </div>
    )
}

export default Userpage;