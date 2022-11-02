import React from 'react'
import fireIconImage from '../images/fireIcon.png'
import FireIcon from './FireIcon'


export default function BlogPostForm () {
    const [formState, setFormState] = React.useState({ flaire: '', title: '', text: '', fireLevel: ''});
    const [isHovered, setIsHovered] = React.useState();
    const [isLit, setIsLit] = React.useState();
    const [formErrors, setFormErrors] = React.useState({});

    /*need to start implementing the validation states,
    /*will need an errorState object with a specified error for each field*/
    


    /*handleChange for input fields*/
    function handleChange(e) {
        const { name, value } = e.target;
        setFormState({...formState, [name]: value})
    }

    /*functions for fire icon handling*/
    function handleMouseOver(e) {
        setIsHovered(e.target.id);
    }

    function handleMouseLeave(e) {
        setIsHovered();
    }

    function handleFireIconClick(e) {
        setIsLit(e.target.id);
        setFormState((prevFormState) => ({...prevFormState, fireLevel: e.target.id}))
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
        return classNames.join(' ');
        
    }

    /*render 5 fireIcons */

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
                key={i+1}
            />
        )
    }



    /*submit function*/
    function validate(values) {
        const errors = {}
        if(!values.flaire) {
            errors.flaire = "Flaire is required!"
        }
        if(!values.title) {
            errors.title = "Title is required!"
        }
        else if (values.title.length > 200) {
            errors.title = "Title must be less than 200 characters"
        }
        if(!values.text) {
            errors.text = "Text is required!"
        }
        else if(values.text.length > 1000) {
            errors.text = "Text must be less than 1000 characters!"
        }
        if(!values.fireLevel) {
            errors.fireLevel = "Select a fire level!"
        }
        return errors;

    }

    function submitForm(event) {
        setFormErrors(validate(formState));
        const errors = validate(formState);
        //check to see if all values in the error object are blank
        const isEmpty = !Object.values(errors).every(key => key === null || key === '');

        if (isEmpty) {
            event.preventDefault();
            console.log(errors);
        } else {

        /*if no errors make post request to '/' endpoint and add to database*/
            const data = formState;
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            fetch('http://localhost:8000', options);
        }
    }


    /*blogPostForm jsx*/
    
    return (
        <form className="postForm">
            <h1 className="postFormHeader">Create a blog post!</h1>        
                <select
                    required
                    className="flaireSelect" 
                    name="flaire"
                    value={formState.flaire}
                    onChange={handleChange}>
                        <option disabled={true} value="">Choose a flaire</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="CSS">CSS</option>
                        <option value="HTML">HTML</option>
                        <option value="REACT">REACT</option>
                        <option value="BACKEND">BACKEND</option>
                </select>
                {formErrors.flaire && <p className="inputError inputErrorCenter">{ formErrors.flaire }</p> }
                <input
                    value={formState.title}
                    onChange={handleChange}
                    className="titleBox"
                    placeholder="title"
                    type="text"
                    id="title"
                    name="title"
                />
               {formErrors.title && <p className="inputError">{ formErrors.title }</p> }
                <textarea
                    value={formState.text}
                    onChange={handleChange}
                    className="textBox"
                    placeholder="text"
                    type="text"
                    id="blogPost"
                    name="text"
                />
                {formErrors.text && <p className="inputError">{ formErrors.text }</p> }
                <div className="fireIconContainer">
                    {fireIconsArray}
                </div>  
                {formErrors.fireLevel && <p className="inputError inputErrorCenter">{ formErrors.fireLevel }</p> }
                <div className="blogPostFormButtonContainer">
                    <button className="blogPostSubmit" onClick={submitForm}>SUBMIT</button>
                    <button className="blogPostCancel" type="submit">CANCEL</button>
                </div>

        </form>
    )
}