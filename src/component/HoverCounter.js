import React,{ useState } from "react";

const HoverCounter = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <>
            <button onMouseOver={() => incrementCount()} > Mouse Over Count is : {count}</button>
        </>
    )
};

export default HoverCounter;