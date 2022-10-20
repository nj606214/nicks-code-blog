import React from 'react'
import fireIconImage from '../images/fireIcon.png'


export default function FeedPost(props) {
    return (
        <div className="feedPostContainer">
            <h2 className="feedPostTitle">{props.title}</h2>
            <p className="feedPostText">{props.text}</p>
            <div className="feedPostDetails">
                <div  className="feedPostDate">
                    <p>11/6/2022</p>
                </div>
                <div className="feedPostFireIconContainer">
                    <img className="feedPostFireIcon feedPostFireIcon1"src={fireIconImage} alt="fire icon"></img>
                    <img className="feedPostFireIcon feedPostFireIcon2" src={fireIconImage} alt="fire icon"></img>
                    <img className="feedPostFireIcon feedPostFireIcon3" src={fireIconImage} alt="fire icon"></img>
                    <img className="feedPostFireIcon feedPostFireIcon4" src={fireIconImage} alt="fire icon"></img>
                    <img className="feedPostFireIcon feedPostFireIcon5" src={fireIconImage} alt="fire icon"></img>
                </div>
                <div  className="feedPostFlaire">
                    <p>{props.flaire}</p>
                </div>
            </div>
        </div>
    )
}