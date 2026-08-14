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


    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }

    const handleExtraSpaces = ()=> {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }



    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === "dark" ? "rgb(35 74 104)" : "white",
                        color: props.mode === "dark" ? "white" : "black"
                    }} id="myBox" rows="8" ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={erase}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Enter text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Charactors</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
