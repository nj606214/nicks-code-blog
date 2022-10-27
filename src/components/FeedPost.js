import React from 'react'
import fireIconImage from '../images/fireIcon.png'



export default function FeedPost(props) {
    //need to put some isLit logic into the feedPost
    //create some logic that generates 5 fire icons, and for each icon
    //the loop checks to see if index + 1 is less than or equal to fireLevel
    //and if it is, it adds class "isLit" to the fireIcon


    const feedPostFireIcons = []
    //need to push 5 fireIcon elements to this array
    const feedPostFireLevel = props.fireLevel;
    function handleFeedPostFireIconClassName(i, feedPostfireLevel) {
        const feedPostFireIconClassNames = ["feedPostFireIcon"];

        if (i+1 <= feedPostFireLevel) {
            feedPostFireIconClassNames.push(
                "feedPostFireIconIsLit"
            )
        }
        
        feedPostFireIconClassNames.push(`feedPostFireIcon${i+1}`)
        console.log(feedPostFireIconClassNames)
        return feedPostFireIconClassNames.join(' ');
    }

    for (let i=0; i<5; i++) {
        

        feedPostFireIcons.push(
            <img
                src={fireIconImage}
                className={handleFeedPostFireIconClassName(i, feedPostFireLevel)}
                alt="a fire"
            />
        )
    }








    return (
        <div className="feedPostContainer">
            <h2 className="feedPostTitle">{props.title}</h2>
            <p className="feedPostText">{props.text}</p>
            <div className="feedPostDetails">
                <div  className="feedPostDate">
                    <p>11/6/2022</p>
                </div>
                <div className="feedPostFireIconContainer">
                    {feedPostFireIcons}
                </div>
                <div  className="feedPostFlaire">
                    <p>{props.flaire}</p>
                </div>
            </div>
        </div>
    )
}