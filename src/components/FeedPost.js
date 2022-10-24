import React from 'react'
import fireIconImage from '../images/fireIcon.png'



export default function FeedPost(props) {

    //need to put some isLit logic into the feedPost
    //create some logic that generates 5 fire icons, and for each icon
    //the loop checks to see if index + 1 is less than or equal to fireLevel
    //and if it is, it adds class "isLit" to the fireIcon
    /* const fireLevel = props.fireLevel

    const fireIconClassNames = []
    function handleFeedPostFireIconClassName(fireLevel) {
        
    }



    const feedPostFireIcons = []

    for (let i = 0; i<5; i++) {
        //need to create an array of className strings
        
                
        }
        feedPostFireIcons.push(
            //create some function that determines the classNames, and then call that function in 
            //the className property
            
            <img
                className
            
            >
            </img>
        )
    }*/







    return (
        <div className="feedPostContainer">
            <h2 className="feedPostTitle">{props.title}</h2>
            <p className="feedPostText">{props.text}</p>
            <div className="feedPostDetails">
                <div  className="feedPostDate">
                    <p>11/6/2022</p>
                </div>
                <div className="feedPostFireIconContainer">
                    <img className="feedPostFireIcon feedPostFireIcon1" src={fireIconImage} alt="fire icon"></img>
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