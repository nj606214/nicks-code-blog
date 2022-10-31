import React from 'react'

export default function SignUp() {
    return(
        <div className="signUpFormContainer">
            <form className="signUpForm">
                <input 
                    name="username"
                    type="text"
                    placeholder="Username"
                    className="signUpInput"
                />
                 <input 
                    name="password"
                    type="text"
                    placeholder="Password"
                    className="signUpInput"
                />
                 <input 
                    name="confirmPassword"
                    type="text"
                    placeholder="Confirm password"
                    className="signUpInput"
                />
                <div>
                    <button>Sign Up</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    )
}

