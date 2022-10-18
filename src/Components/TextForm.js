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

    

    const[text,setText] = useState("Enter the text here")
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
    </div>
  );
}
