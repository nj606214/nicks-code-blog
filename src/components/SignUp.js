import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function SignUp() {

    const [formState, setFormState] = React.useState({username: '', email: '', password: '', confirmPassword: ''})
    const [formErrors, setFormErrors] = React.useState({});
    
    /*form input functions */
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
        if(!values.email) {
            errors.email='must include email'
        }
        if(!values.password) {
            errors.password='must include password'
        }
        if(!values.confirmPassword) {
            errors.confirmPassword='must confirm password'
        }
        if(!(values.password === values.confirmPassword)) {
            errors.confirmPassword='passwords must match'
        }

        return errors;
    }

    const navigate = useNavigate();

    function submitForm(event) {
        setFormErrors(validate(formState));
        const errors=validate(formState);

        const isEmpty = !Object.values(errors).every(key => key === null || key === '');

        if (isEmpty) {
            event.preventDefault();
            console.log(errors);
        } else

        navigate('/');
    }
    
    return(
            <form className="signUpForm">
                <p className="signInPageFormTitle">Sign Up</p>
                <input 
                    name="username"
                    type="text"
                    placeholder="Username"
                    className="signInPageFormInput"
                    value={formState.username}
                    onChange={handleChange}
                />
                {formErrors.username && <p className="inputError inputErrorCenter">{ formErrors.username }</p> }
                <input 
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="signInPageFormInput"
                    value={formState.email}
                    onChange={handleChange}
                />
                {formErrors.email && <p className="inputError inputErrorCenter">{ formErrors.email }</p> }
                 <input 
                    name="password"
                    type="text"
                    placeholder="Password"
                    className="signInPageFormInput"
                    value={formState.password}
                    onChange={handleChange}
                />
                {formErrors.password && <p className="inputError inputErrorCenter">{ formErrors.password }</p> }
                 <input 
                    name="confirmPassword"
                    type="text"
                    placeholder="Confirm password"
                    className="signInPageFormInput"
                    value={formState.confirmPassword}
                    onChange={handleChange}
                />
                {formErrors.confirmPassword && <p className="inputError inputErrorCenter">{ formErrors.confirmPassword }</p> }
                <div>
                    <button className="signInPageFormButton" onClick={submitForm}>Sign Up</button>
                    <button className="signInPageFormButton">Cancel</button>
                </div>
            </form>
    )
}

