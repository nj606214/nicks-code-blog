import React from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'


export default function SignInPage() {
    const [signInState, setSignInState] = React.useState(true);


    function handleClassNames(isSelected) {
        const classNames=['signInPageToggleButton'];
        if (signInState === isSelected) {
            classNames.push('isSelected')
        }
        return classNames.join(' ')
    }


    return (
        <div className="signInPage">
            <div className="signInPageFormContainer">
                {!signInState && <SignUp /> }
                {signInState && <LogIn /> }
                <div className="signInPageToggleContainer">
                    <div onClick={() => {setSignInState(true)}} className={handleClassNames(true)}>Log In</div>
                    <p>/</p>
                    <div onClick={() => {setSignInState(false)}} className={handleClassNames(false)}>Sign Up</div>
                </div>
            </div>
        </div>
    )
}