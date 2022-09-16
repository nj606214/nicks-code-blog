import React from 'react'
import fireIconImage from '../images/fireIcon.png'


export default function FeedPost() {
    return (
        <div className="feedPostContainer">
            <h2 className="feedPostTitle">This is my first blog post!</h2>
            <p className="feedPostText">Hello My name is nick Johnson and this is my first blog post.
            I created this blog to post daily coding updates and tips and tricks that I learn along the way. 
            Come join me on my coding journey. Hello My name is nick Johnson and this is my first blog post.
            I created this blog to post daily coding updates and tips and tricks that I learn along the way. 
            Come join me on my coding journey</p>
            <div className="feedPostDetails">
                <span className="feedPostDate">11/6/2022</span>
                <div className="feedPostFireIconContainer">
                    <img className="feedPostFireIcon feedPostFireIcon1"src={fireIconImage} alt="fire icon"></img>
                    <img className="feedPostFireIcon feedPostFireIcon2" src={fireIconImage} alt="fire icon"></img>
                    <img className="feedPostFireIcon feedPostFireIcon3" src={fireIconImage} alt="fire icon"></img>
                    <img className="feedPostFireIcon feedPostFireIcon4" src={fireIconImage} alt="fire icon"></img>
                    <img className="feedPostFireIcon feedPostFireIcon5" src={fireIconImage} alt="fire icon"></img>
                </div>
                <p className="feedPostFlaire">JavaScript</p>
            </div>
        </div>
    )

}