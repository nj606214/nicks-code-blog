import React from "react";

export default function LogIn() {
    /*functions for log in procedure*/




    return(
        <div className="logInFormContainer">
            <form className="logInForm">
                <input 
                    placeholder="Username"
                    name="username"
                    type="text"
                    id="username"
                    className="signInInput"
                
                />
                <input 
                    placeholder="Password"
                    name="password"
                    type="text"
                    id="password"
                    className="signInInput"
                
                />
                <div className="logInFormButtonContainer">
                    <button>Log In</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    )
}

