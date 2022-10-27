import React, {useState} from "react";

export default function About() {
  const [mycss, setMycssCount] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [border, setMyborder] = useState({
    border: "3px solid black",
    color: "black",
    padding: "5px",
  });
  const [btnTxt, changeBtn] = useState("Enable Dark Mode");
  var toggle = ()=>{
    if(mycss.color === "black"){
      setMyborder({
        border: "1px solid white",
      });
      setMycssCount({
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
      });
      changeBtn("Enable Light Mode");
    }else{
      setMyborder({
        border: "1px solid white",
      });
      setMycssCount({
        backgroundColor: "white",
        color: "black",
      });
      changeBtn("Enable Dark Mode");
    }
  };
  return (
    <>
      <div className="container mt-5 p-5" style={border}>
        <h1>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={mycss}>
        <div className="accordion-item" style={mycss}>
          <h2 className="accordion-header" id="flush-headingOne" style={mycss}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={mycss}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mycss}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={mycss}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={mycss}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
            style={mycss}
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      <div className="container" my-3>
        <button onClick={toggle} type="button" className="btn btn-primary my-3">
          {btnTxt}
        </button>
      </div>
    </div>
    </>
  );
}
