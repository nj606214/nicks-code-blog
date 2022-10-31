import React from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'


export default function SignInPage() {
    return (
        <div className="signInPage">
            <div className="signInPageFormContainer">
                <SignUp />
                <LogIn />
                <div className="signUpPageToggleContainer">
                    <p>Log In</p>
                    <p>/</p>
                    <p>Sign Up</p>
                </div>
            </div>
        </div>
    )
}