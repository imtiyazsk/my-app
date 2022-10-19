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

    

    const[text,setText] = useState(" ")
  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <h1 className="mt-3">{props.heading}</h1>
          <textarea className="form-control mt-3" value={text}  onChange={handelOnChange} id="myBox" rows="8 "></textarea>
          <button className="btn btn-primary mt-3" onClick={handelUpClick}>Convert To UpperCase</button>
          <button className="btn btn-primary mt-3 ms-5" onClick={handel_UpClick}>Convert To LowerCase</button>
        </div>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
