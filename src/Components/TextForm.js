import React, {useState} from "react";

export default function TextForm(props) {

    const handelUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handelOnChange = (event)=>{
        setText(event.target.value)
    }
    const handel_UpClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handelClear = ()=>{
      let newText = "";
      setText(newText)
  }
  const clearExtra = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}
const handelCopy= ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}

    

    const[text,setText] = useState('')
  return (
    <div>
      <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h1 className="mt-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control mt-3" value={text}  onChange={handelOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"#042743"}} id="myBox" rows="8 "></textarea>
          <button className="btn btn-primary mt-3" onClick={handelUpClick}>Convert To UpperCase</button>
          <button className="btn btn-primary mt-3 ms-5" onClick={handel_UpClick}>Convert To LowerCase</button>
          <button className="btn btn-primary mt-3 ms-5" onClick={handelClear}>Clear</button>
          <button className="btn btn-primary mt-3 ms-5" onClick={clearExtra}>Clear Extra Space</button>
          <button className="btn btn-primary mt-3 ms-5" onClick={handelCopy}>Copy</button>
        </div>
      </div>
      <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something In The Above Textbox To preview Here"}</p>
      </div>
    </div>
  );
}
