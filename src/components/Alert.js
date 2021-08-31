import React from 'react'

function Alert(props) {
    return (
        //props.alert && means if props.alert is false then code after it will not evalute 
        props.alert && <div id='alert' >
            {show_alert_func}
            {hide_alert_function}
            <p ><strong>{props.alert.alert_type}</strong>:{props.alert.msg} </p>


        </div>
    )
}

function show_alert_func() {
    document.getElementById("alert").style.display = "block"
}

function hide_alert_function() {
    setTimeout(() => { 
        document.getElementById("alert").style.display = 'none' 
    },3500)}



export default Alert;