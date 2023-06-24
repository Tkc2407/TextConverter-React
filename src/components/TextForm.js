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

    const hanndleClear=()=>{
        let newText='';
        setText(newText);
        props.showAlert('Text Cleared','success')
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success")
    }


    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#343a40' : 'white' , color : props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my1" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my1" onClick={handleLoClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my1" onClick={speak}>Speak</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my1" onClick={handleClear}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my1" onClick={handleCopy}>Copy text</button>
            </div>

            <div className="containey my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Enter something in the box to preview it here"}</p>
            </div>
        </>
    )
}