import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper Case Was Clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowClick = () => {
        // console.log("Upper Case Was Clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    //"You have clicked on handleUpClick"
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const erase = () => {
        setText("")
        props.showAlert("Text Erased Successfully", "success")
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === "dark" ? "grey" : "white",
                        color: props.mode === "dark" ? "white" : "black"
                    }} id="myBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={erase}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Enter text summary</h2>
                <p>{text.split(" ").length} Words, {text.length} Charactors</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above preview it here"}</p>
            </div>
        </>
    )
}
