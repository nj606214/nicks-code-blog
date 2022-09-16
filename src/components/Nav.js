import React from 'react';
import menu from '../images/menu.png';

export default function Nav() {
    const [isExpanded, setIsExpanded] = React.useState(false);
    
    function toggleNav() {
        setIsExpanded(!isExpanded);
    }

    

    return (
        <nav className="navBar">
            <a href="#main" className="navMainLogo">Nick J's Code Blog!</a>
            <img src={menu} alt="menu icon" className="menuIcon" onClick={toggleNav}></img>  
                <div className="navButtons" id={isExpanded ? "expanded" : ""}>       
                        <a className="firstButton" href="#feed">Blog Posts</a>
                        <a href="google.com">About</a>
                        <a href="google.com">My Portfolio</a>
                </div>   
        </nav>
    )
}
