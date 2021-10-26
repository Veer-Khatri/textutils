import veer_logo from '../veer_logo.png';

import PropTypes from 'prop-types'
import'./Navbar_css.css'
import React from 'react'
import { Link } from 'react-router-dom';
// rfc emmet 
function darkModeBtn(props) {
    let btn_color_changer = document.getElementsByClassName("btn")
    let navLinks = document.getElementsByClassName("navlinks");
    let drak_light_switch = document.getElementById("drak_light_switch");
    let searchBtn = document.getElementById("search_btn");
    let html = document.getElementsByTagName('html')[0]
    let search_inp = document.getElementById("search_input")
    let navbar = document.getElementsByClassName("navbar")[0];

    if (html.style.background === "white") {
        // props.showAlert("Light mode enabled", "Success") not working
        for (const element of navLinks) { 
            element.style.color = 'white'

        }
        for (const iterator of btn_color_changer) {
            iterator.style.background = 'none'
        }
        searchBtn.style.color = 'white'
        search_inp.style.color = 'white'
        html.style.background = "black"
        navbar.style.background = "#000054"
        html.style.color = 'white'
        drak_light_switch.innerText = "Light Mode"
    }
    else {
        // props.showAlert("Dark mode enabled", "Success") not working
        for (const element of navLinks) {
            element.style.color = 'black'

        }
        for (const iterator of btn_color_changer) {
            iterator.style.background = '#FF5200'
        }
        search_inp.style.color = 'black'
        searchBtn.style.color = 'black'
        navbar.style.background = "#fff"
        html.style.background = "white"
        html.style.color = 'black'
        drak_light_switch.innerText = "Dark Mode";

    }


}
export default function Navbar(props) {
    return (
        <>
        <nav className="navbar">
            <div className="logo_img_div">
                <Link to="/" id="logo_anchor_tag"><img src={veer_logo} alt="logo" id='logo_img' /></Link>
                <p>{props.title}</p>
            </div>
            <div className="links">
                <li><Link to="/" className="navlinks">Home</Link></li> 
                <li><Link to="/about" className="navlinks">About Us</Link></li>
                <li><Link to="/contact" className="navlinks">Contact Us</Link></li>
                <li><Link to="/seller" className="navlinks">Become a Seller</Link></li>
            </div>
            <div className="searchBox">
                <input type="text" id="search_input" />
                <button id="search_btn">Search</button>
            </div>
        <button id='drak_light_switch' className=" darkLightBTN" onClick={darkModeBtn}>Dark Mode</button>
        </nav>

        </>
    )
}

Navbar.propTypes = {
    // this is like a checker so we mistakenly not send wrong datatype in props(properties) 
    title: PropTypes.string,
    about_link: PropTypes.string.isRequired
    // isRequired means about_link is required if about_link is not given and not any default value of about_link is given then give error
}
Navbar.defaultProps = {
    // these values are not shown if title and about_link are given, they are only shown when props are not values are not initialized to the props
    title : "hello title",
    about_link: "i am default" 
}