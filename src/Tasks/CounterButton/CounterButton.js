import React from "react";
import "./CounterButton.scss";
import { useState } from "react";

function Button() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="outerdivider">
            <div className="buttoncontainer"> 
                <button className="button" onClick={handleClick}>Click me!</button>
                <p className="count">You clicked {count} times</p>
                <button className="button" onClick={() => setCount(0)}>Reset</button>

            </div>
            <button className="backtomain" onClick={() => window.location.href = "/"}>Back to the main page</button>
        </div>
    );
};

export default Button;