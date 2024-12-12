import React from "react";
import "./TextDisplay.scss";
import { useState } from "react";

function TextDisplay() {

    const [text, setText] = useState("This is a placeholder text");

    function handleTextChange(event) {
        setText(event.target.value);
    }

    return (
        <div className="textdisplaycontainer">
            <h1>Text Display</h1>
            <input type="text" onChange={handleTextChange} placeholder="Type something here" />
            <p>Text: {text}</p>
            <button onClick={() => window.location.href = "/"} >Back to the main page</button>
        </div>
    )
}

export default TextDisplay;