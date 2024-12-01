
import React from "react";
import {NavLink} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav>
            <div className="navbar"  style={props.myStyle}> 
                <div className="navtitle">
                    <p>Edizext</p>
                </div>
                <div className="navpages"   >
                    <ul className="navul" >
                        <NavLink to="/" style={props.myStyle}>Home</NavLink>
                        <NavLink to="/About" style={props.myStyle}>About</NavLink>
                       <NavLink to="/Contact" style={props.myStyle}>Contact Us</NavLink>
                    </ul>
                </div>
                <div className="dmode">
                <label className="switch" >
                <input type="checkbox" onClick={props.toggleMode} />
                <span className="slider round"></span>
                </label>
                <p>Enable Darkmode</p>
                </div>
            </div>
        </nav>
    )
}
