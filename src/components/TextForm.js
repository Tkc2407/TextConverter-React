import React, { useState } from 'react'

export default function TextForm(props) {

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UPPER CASE','success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lower case','success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClear=()=>{
        let newText='';
        setText(newText);
        props.showAlert('Text Cleared','success')
    }


    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'gray' : 'white' , color : props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>clear text</button>
            </div>

            <div className="containey my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} word and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes read</p>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Enter something in the box to preview it here"}</p>
            </div>
        </>
    )
}