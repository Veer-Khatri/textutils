// hooks are used to use function of classes without making classes
import React , { useState } from 'react'

export default function Textform(props) {
    function uppercaseFunc(){
        
        let newtext = text.toUpperCase();
        setText(newtext)
    }   
    function copyText(){
        let textarea_value = document.getElementById("textarea").value
        navigator.clipboard.writeText(textarea_value)
        
    }   
    function lowercaseFunc(){
        
        let newtext = text.toLowerCase();
        setText(newtext)
    }   
    function handleOnChange(eventobj){
        setText(eventobj.target.value)
    }   
    const [ text, setText] = useState("");// here we are saying that we set a state variable named text and its default value is (enter text here)
    // text = "abcd" // we cant change the value of text like this we have to use setText function for changing value or assigning new values of text
    // setText("this is how to change text");
    return (
        <>
        <div action="" className="form">
            <h1>{props.heading}</h1>
            <label htmlFor="textarea"></label> 
            <textarea name="textarea" id="textarea" onChange={handleOnChange} value={text} cols="25" rows="12"></textarea>
            <div className="btn_container">
                <button id='uppercase' onClick={uppercaseFunc} className="btn">Convert to Uppercase</button> 
                <button id='lowercase' onClick={lowercaseFunc} className="btn">Convert to lowercase</button> 
                <button id='copy' onClick={copyText} className="btn">Copy text</button> 
            </div>
        </div>
        <div className="form">
            <h1>Your text summary</h1>
            <p className="summaryPara">{text.split(" ").length + text.split('\n').length } words and {text.length} characters</p>
            <p className="summaryPara">{0.005*(text.split(" ").length)} minutes to read this</p>
        </div>
        </>
    )
}

 