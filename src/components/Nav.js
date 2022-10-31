import React from 'react';
import menu from '../images/menu.png';

export default function Nav() {
    const [isExpanded, setIsExpanded] = React.useState(false);
    
    function toggleNav() {
        setIsExpanded(!isExpanded);
    }

    /*need to add function that changes the color of nav icon if current*/

    return (
        <nav className="navBar">
            <a href="/" className="navMainLogo">Nick J's Code Blog!</a>
            <img src={menu} alt="menu icon" className="menuIcon" onClick={toggleNav}></img>  
                <div className="navButtons" id={isExpanded ? "expanded" : ""}>       
                        <a className="firstButton" href="/#feed">Blog Posts</a>
                        <a href="/about">About</a>
                        <a href="/profile">My Profile</a>
                </div>   
        </nav>
    )
}
