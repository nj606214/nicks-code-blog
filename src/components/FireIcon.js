import React from 'react';
import fireIconImage from '../images/fireIcon.png';

export default function FireIcon(props) {
    return (
        <img
            onClick={props.onClick}
            onMouseLeave={props.onMouseLeave}
            onMouseOver={props.onMouseOver}
            className={props.className}
            src={fireIconImage}
            alt="fire icon"
            id={props.id}
        ></img>
    )
}