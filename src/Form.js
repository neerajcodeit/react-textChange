import React, { useState } from "react";

const Form = (props) => {

    const toUpperCase = (e) => {
        const newText = text.toUpperCase(e.target.value);         //upercase function
        setText(newText);
    };

    const toLowerCase = (e) => {
        const newText = text.toLowerCase(e.target.value);           //lowercase function
        setText(newText);
    };

    const clearText =()=>{
        setText("");                                                //cleartext function
    }

    const copyText =( )=>{
        let text =document.getElementById("myBox");
        text.select();                                      //copytext function
        navigator.clipboard.writeText(text.value);
    }

    const removeSpaces=()=>{
        let newText =text.split(/[  ]+/);                   //remove spaces function
        setText(newText.join(" "));
    }
    // const emptyArea=()=>{
    //     setText(" ");
    // }
    const toOnChange = (e) => {                                         //listener to textArea
        setText(e.target.value);
     };

    const [text, setText] = useState("");               //useState
    return (
        <>
            <div className=" container mb-3">
                <h1>{props.heading}</h1>
                <textarea
                    className="form-control mb-4"
                    value={text}
                    onChange={toOnChange}
                    // onClick={emptyArea}
                    id="myBox"
                    rows="12"
                    placeholder="Enter text here"
                    style={{backgroundColor:props.mode ==='light'?'white':'#0c0430',color:props.mode ==='dark'?'#fff':'black'}}
                ></textarea>
                <button type="button" onClick={toUpperCase} className="btn btn-info mx-3">
                    UPPERCASE
                </button>
                <button type="button" onClick={toLowerCase} className="btn btn-info mx-3">
                    lowercase
                </button>
                <button type="button" onClick={clearText} className="btn btn-info mx-3">
                    CLEARTEXT
                </button>
                <button type="button" onClick={copyText} className="btn btn-info mx-3">
                    copy
                </button>
                <button type="button" onClick={removeSpaces} className="btn btn-info mx-3">
                    Remove spaces
                </button>
            </div>
            <div className="container my-3">
                <h2>preview text</h2>
                <p> {text.split(" ").length} words and {text.length} character</p>
                <p> { 0.008 * text.split(" ").length}minute to read</p>
                <h2>PREVIEW</h2>
                <p>{text.length>0 ?text:'Enter Text above to preview'}</p>
            </div>
        </>
    );
};

export default Form;
