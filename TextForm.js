import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpClick =()=>{
        // console.log("UpperCase was Clicked --> "+ text);
        let  newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppdercase","success");
    }

    const handleLwClick =()=>{
        // console.log("LowerCase was Clicked --> "+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");

    }

    const handleClearClick =()=>{
        setText("");
      props.showAlert("Text Cleared", "success");

    }
    const handleCopyClick=()=>{
        var text2=document.getElementById("myBox");
        text2.select();
        navigator.clipboard.writeText(text2.value);
      props.showAlert("Text Copied to clipboard!", "success");

    }


    const handleOnChange =(event)=>{
        // console.log("On Changed");
        setText(event.target.value);
    }


    const [text,setText] = useState("");
    
    return (
        <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1  >{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control my-3" id="myBox" value={text} onChange={handleOnChange} rows="8" 
          style={{backgroundColor: props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary me-3" onClick={handleLwClick}>Convert to Lowercase</button>
      <button className="btn btn-primary me-3" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-danger" onClick={handleClearClick}>Clear Text</button>


    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length-1} Words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  );
}
