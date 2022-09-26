import React from 'react'
import fireIconImage from '../images/fireIcon.png'
import FireIcon from './FireIcon'


export default function BlogPostForm () {
    const [formState, setFormState] = React.useState({ flaire: '', title: '', text: ''});
    const [isHovered, setIsHovered] = React.useState();
    const [isLit, setIsLit] = React.useState();

    function changeFlaire(event) {
        const selectedFlaire = event.target.value;
        setFormState( {...formState, flaire: selectedFlaire });
    }

    function changeTitle(event) {
        const title = event.target.value;
        setFormState( {...formState, title: title });
    }

    function changeText(event) {
        const text = event.target.value;
        setFormState( {...formState, text: text });
    }

    function handleMouseOver(e) {
        setIsHovered(e.target.id);
    }

    function handleMouseLeave(e) {
        setIsHovered();
    }

    function handleFireIconClick(e) {
        setIsLit(e.target.id);
    }

    function handleFireIconClass(fireLevel) {
        const classNames = ['fireIcon']
            classNames.push(`fireIcon${fireLevel}`)
            if (isHovered >= fireLevel) {
                classNames.push('isHeld')
            }
            if (isLit >= fireLevel) {
                classNames.push('isLit')
            }
            console.log(classNames)
        return classNames.join(' ');
        
    }


    const fireIconsArray = [];

    for (let i = 0; i < 5; i++) {
        fireIconsArray.push(
            <FireIcon 
                onClick={handleFireIconClick}
                onMouseLeave={handleMouseLeave}
                onMouseOver={handleMouseOver}
                className={handleFireIconClass(i+1)}
                src={fireIconImage}
                alt="fire icon"
                id={i+1}
            />
        )
    }

    console.log(fireIconsArray);
    
    return (
        <form className="postForm">
            <h1 className="postFormHeader">Create a blog post!</h1>        
                <select
                    required
                    className="flaireSelect" 
                    value={formState.flaire}
                    onChange={changeFlaire}>
                        <option disabled={true} value="">Choose a flaire</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="CSS">CSS</option>
                        <option value="HTML">HTML</option>
                        <option value="REACT">REACT</option>
                        <option value="BACKEND">BACKEND</option>
                </select>
                <input
                    value={formState.title}
                    onChange={changeTitle}
                    className="titleBox"
                    placeholder="title"
                    type="text"
                    id="title"
                    name="title"
                />
                <textarea
                    value={formState.text}
                    onChange={changeText}
                    className="textBox"
                    placeholder="text"
                    type="text"
                    id="blogPost"
                    name="blogPost"
                />
                <div className="fireIconContainer">
                    {fireIconsArray}
                </div>  
                <div className="blogPostFormButtonContainer">
                    <button className="blogPostSubmit" type="submit">SUBMIT</button>
                    <button className="blogPostCancel" type="submit">CANCEL</button>
                </div>

        </form>
    )
}