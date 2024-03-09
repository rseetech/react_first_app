import React, { useEffect, useState } from "react";

const Welcome = () => {
    const msg = "Hello RseeTech";
    const isLoggedIn = false;

    /* useEffect(() => {
        if(isLoggedIn){
            setMsg("Hello RseeTech");
        } else {
            setMsg("Hello Guest");
        }
    },[isLoggedIn]); */

    return (
        <>
            <h1>
                {isLoggedIn && msg }
            </h1>
        </>
    )
};

export default Welcome;