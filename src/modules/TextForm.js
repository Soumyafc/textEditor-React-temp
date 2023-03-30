import React, { createElement, useState } from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("uppercase was clicked"+  text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };
  const handlelowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  // const handleitalicClick = ()=>{
  //     let newText = text;
  //     setText(newText);
  // }

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label htmlFor = "myBox" className="form-label">Example of text</label> */}
          <GrammarlyEditorPlugin clientId="client_N7kiYdtdh1ocS8RQSm8SA2">
            {" "}
            {/* //USING MY OWN CLIENT ID Please use your own for data analysis in
            dashboard in grammarly api */}
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              cols="30"
              rows="10"
              contenteditable="true"
            />
          </GrammarlyEditorPlugin>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Covert to uppercase
        </button>
        &nbsp;
        <button className="btn btn-primary" onClick={handlelowClick}>
          Covert to lowercase
        </button>
        &nbsp;
        {/* <button className="btn btn-primary" onClick={handleitalicClick}>Covert to italics</button> */}
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>
          {" "}
          <b>{text.split(" ").length}</b>,<b> {text.length} </b>characters
        </p>
        <p>Avarage time to read is {0.008 * text.length} Minutes</p>
        <h3>Preview of text</h3>
        <p> {text} </p>
      </div>
    </>
  );
}
