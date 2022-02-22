import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    //---------------------------------------------------------------------------->

    let [text , setText] = useState("");
    let [myStyle , setMyStyle] = useState();

    // a function which helps us to change the text____________________________

    const handleTextChange = (e)=>{
        let newText = e.target.value;
        setText(newText);
    }
    //---------------------------------------------------------------------------->

    // To change the text to upper case_________________________________

    const handleUpperCaseClick = ()=>{
        let newStyle = {
            textTransform : "uppercase"
        }
        setMyStyle(newStyle);
        props.theAlert("success" , "Text Converted to Upper case");
    }
    //---------------------------------------------------------------------------->

    // To change the text to lower case_________________________________

    const handleLowerCaseClick = ()=>{
        let newStyle = {
            textTransform : "lowercase"
        }
        setMyStyle(newStyle);
        props.theAlert("success" , "Text Converted to Lower case");
    }
    //---------------------------------------------------------------------------->

    // To make first letter capital of the text_________________________________

    const handleFirstLetterCapitalClick = ()=>{
        setText(text.toLowerCase());
        let newStyle = {
            textTransform : "capitalize"
        }
        setMyStyle(newStyle);
        props.theAlert("success" , "First Letter Of The Text Has Been Capitalize");
    }
    //---------------------------------------------------------------------------->

    // To reset the text to normal_________________________________

    const handleResetTextClick = ()=>{
        let newStyle = {
            textTransform : "none"
        }
        setMyStyle(newStyle);
        props.theAlert("success" , "Text reseted");
    }
    //---------------------------------------------------------------------------->

    // To Clear the text_________________________________

    const handleClearTextClick = ()=>{
        let newText = "";
        setText(newText);
        props.theAlert("warning" , "Text Cleard!");
    }

    //---------------------------------------------------------------------------->

    // To find the number of words in the text______________________________________

    let numberOfWords = 0;
    if(text === "" || text === " "){
        numberOfWords = 0;
    }
    else{
        numberOfWords = text.split(" ").length;
    }

    //---------------------------------------------------------------------------->

    return (
        <div className={`container my-4 bg-${props.mode === "dark"?"#2f3236":"light"}`}>
            <h1 className={`text-center text-${props.mode === "dark"?"light":"dark"}`}>Enter Your Text Below</h1>
            <div className="mb-3">
                <textarea className={`form-control bg-${props.mode === "dark"?"dark":"white"} text-${props.mode === "dark"?"light":"dark"}`} value={text} style={myStyle} onChange={handleTextChange} rows="10"></textarea>
            </div>
            <button className="btn btn-success" onClick={handleUpperCaseClick}>Upper Case</button>
            <button className={`btn btn-${props.mode === "dark"?"light":"dark"} mx-2 my-2`} onClick={handleLowerCaseClick}>Lower Case</button>
            <button className="btn btn-secondary" onClick={handleFirstLetterCapitalClick}>First Letter Capital</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handleResetTextClick}>Reset</button>
            <button className="btn btn-danger" onClick={handleClearTextClick}>Clear Text</button>
            <div className="container my-4">
                <h4 className={`text-${props.mode === "dark"?"light":"dark"}`}>number of letters: {text.replace(/\s/g , '').length}</h4>
                <h4 className={`text-${props.mode === "dark"?"light":"dark"}`}>number of Words: {numberOfWords}</h4>
            </div>
        </div>
    )
}
