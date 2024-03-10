import React, { useEffect, useState } from "react";

const Welcome = () => {
    const [message, setMessage] = useState("Hello RseeTech");
    const isLoggedIn = false;

    /* useEffect(() => {
        if(isLoggedIn){
            setMessage("Hello RseeTech Again");
        } else {
            setMessage("Hello Guest");
        }
    }); */

    return (
        <div>
            <h2>
                {isLoggedIn &&  message}
            </h2>
        </div>
    )
};

export default Welcome;