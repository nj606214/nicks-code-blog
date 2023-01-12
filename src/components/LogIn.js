import React from "react";
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    /*functions for log in procedure*/

    
    /*form inputs and error states*/
    const [formState, setFormState] = React.useState({username: '', password: ''})
    const [formErrors, setFormErrors] = React.useState({});

    /*form input functions*/
    function handleChange(e) {
        const {name, value} = e.target;
        setFormState({...formState, [name]: value})
    }

    /*submit function*/
    function validate(values) {
        const errors={};
        if(!values.username) {
            errors.username='must include username'
        }
        if(!values.password) {
            errors.password='must include password'
        }

        return errors;
    }

    const navigate = useNavigate();

    function submitForm(event) {
        setFormErrors(validate(formState));
        const errors=validate(formState)

        const isEmpty = !Object.values(errors).every(key => key === null || key === '');

        if (isEmpty) {
            event.preventDefault();
            console.log(errors);
        }
        else {
        const data = formState;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:8000/users/login', options);
        console.log(data)
        navigate('/home');
    }
}

        
    

    return ( 
            <form className="logInForm">
               <p className="signInPageFormTitle">Log In</p>
                <input 
                    value={formState.username}
                    onChange={handleChange}
                    placeholder="Username"
                    name="username"
                    type="text"
                    id="username"
                    className="signInPageFormInput"
                
                />
                {formErrors.username && <p className="inputError inputErrorCenter">{ formErrors.username }</p> }
                <input 
                    value={formState.password}
                    onChange={handleChange}
                    placeholder="Password"
                    name="password"
                    type="password"
                    id="password"
                    className="signInPageFormInput"
                
                />
                {formErrors.password && <p className="inputError inputErrorCenter">{ formErrors.password }</p> }
                <div className="logInFormButtonContainer">
                    <button className="signInPageFormButton" onClick={submitForm}>Log In</button>
                    <button className="signInPageFormButton">Cancel</button>
                </div>
            </form>

    )
}

