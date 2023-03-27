import React, {useState} from 'react';

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        //  console.log("uppercase was clicked"+  text);
         let newText = text.toLocaleUpperCase();
         setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
     }
    const [text, setText] = useState('enter text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor = "myBox" className="form-label">Example of text</label> */}
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" cols="30" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Covert to uppercase</button>
        </div>
    )
}
