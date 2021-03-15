import React from 'react';
import './Login.css';
import { auth, provider } from './firebase.js';
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const SignIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result.user);
            })
            .catch((error) => alert("error.message"));
    };
    return (
        <div className="login">
            <div className="login-logo">
                <img src="/img/logo1.png" alt="" />
                <img src="data:image/png;base64,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" alt="" />
            </div>
            <Button type="submit" onClick={SignIn}>Sign in</Button>
        </div>
    );
}

export default Login;