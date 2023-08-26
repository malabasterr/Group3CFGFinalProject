import React from 'react';
import Login from './login/Login';
import SignUp from './login/SignUp';
import './LoginSignup.css';

function LoginSignup() {
    return (
        <div className='loginSignupContainer'>
            <div className="d-flex justify-content-center align-items-center">
                <div className="row flex-fill">
                    <div className="col-lg-6">
                        <Login />
                    </div>
                    <div className="col-lg-6">
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
