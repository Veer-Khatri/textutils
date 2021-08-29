// hooks are used to use function of classes without making classes
import React , { useState } from 'react'

export default function Textform(props) {
    function uppercaseFunc(){
        
        let newtext = text.toUpperCase();
        setText(newtext)
    }   
    function handleOnChange(eventobj){
        setText(eventobj.target.value)
    }   
    const [ text, setText] = useState("Enter text here");// here we are saying that we set a state variable named text and its default value is (enter text here)
    // text = "abcd" // we cant change the value of text like this we have to use setText function for changing value or assigning new values of text
    // setText("this is how to change text");
    return (
        <div action="" id="form">
            <h1>{props.heading}</h1>
            <label htmlFor="textarea"></label> 
            <textarea name="textarea" id="textarea" onChange={handleOnChange} value={text} cols="25" rows="12"></textarea>
            <div className="btn_container">
                <button id='uppercase' onClick={uppercaseFunc} className="btn">Convert to Uppercase</button> 
            </div>
        </div>
    )
}

