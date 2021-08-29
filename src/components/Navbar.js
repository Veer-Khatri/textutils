import veer_logo from '../veer_logo.png';
import PropTypes from 'prop-types'
import'./Navbar_css.css'

import React from 'react'
// rfc emmet 
export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="logo_img_div">
                <a href="/" id="logo_anchor_tag"><img src={veer_logo} alt="logo" id='logo_img' /></a>
                <p>{props.title}</p>
            </div>
            <div className="links">
                <li><a href="/" className="navlinks">Home</a></li>
                <li><a href="/" className="navlinks">{props.about_link}</a></li>
                <li><a href="/" className="navlinks">Contact Us</a></li>
                <li><a href="/" className="navlinks">Become a Seller</a></li>
            </div>
            <div className="searchBox">
                <input type="text" id="search_input" />
                <button id="search_btn">Search</button>
            </div>
        </nav>
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