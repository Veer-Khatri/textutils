// hooks are used to use function of classes without making classes
import React, { useState } from 'react'

export default function Textform(props) {
    function uppercaseFunc() {
        props.showAlert("Uppercased the text", "Success")
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    function copyText() {
        props.showAlert("copied the text", "Success")
        let textarea_value = document.getElementById("textarea").value
        navigator.clipboard.writeText(textarea_value)

    }
    function lowercaseFunc() {
        props.showAlert("lowercased the text", "Success")
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    function clearText() {
        props.showAlert("cleared the text", "Success")
        setText("")
    }
    function handleOnChange(eventobj) {
        setText(eventobj.target.value)
    }
    function RemoveExrtaSpaces(eventobj) {
        props.showAlert("removed the text", "Success")
        let arr = text.split(/[ ]+/);
        setText(arr.join(" "));

    }
    const [text, setText] = useState("");// here we are saying that we set a state variable named text and its default value is (enter text here)
    // text = "abcd" // we cant change the value of text like this we have to use setText function for changing value or assigning new values of text
    // setText("this is how to change text");

    function totalWordsCounter() {
        let number_of_words_whiteSpace = text.split(" ");
        let number_of_words_newline = text.split('\n');
        let totalWords = number_of_words_newline.length + number_of_words_whiteSpace.length;

        if (text === "") {
            totalWords = 0;
        }
        else {
            number_of_words_whiteSpace.forEach(element => {
                if (element === ``) {
                    totalWords--;

                }

            });
            number_of_words_newline.forEach(elem => {
                if (elem === "\n") {
                    totalWords--;
                }
                if (elem === "") {
                    totalWords--;

                }
            })
            totalWords--;
        }
        return totalWords;
    }

    return (
        <>
            <div action="" className="form">
                <h1>{props.heading}</h1>
                <label htmlFor="textarea"></label>
                <textarea name="textarea" id="textarea" onChange={handleOnChange} value={text} cols="25" rows="12"></textarea>
                <div className="btn_container">
                    <button id='uppercase' onClick={uppercaseFunc} className="btn">Convert to Uppercase</button>
                    <button id='lowercase' onClick={lowercaseFunc} className="btn">Convert to lowercase</button>
                    <button id='lowercase' onClick={RemoveExrtaSpaces} className="btn">Remove-extra-spaces</button>
                    <button id='copy' onClick={copyText} className="btn">Copy Text</button>
                    <button id='clear' onClick={clearText} className="btn">Clear Text</button>
                </div>
            </div>
            <div className="form">
                <h1>Your text summary</h1>
                <p className="summaryPara">{totalWordsCounter()} words and {text.length} characters</p>
                <p className="summaryPara">{0.005 * totalWordsCounter()} minutes to read this</p>
            </div>
        </>
    )
}



