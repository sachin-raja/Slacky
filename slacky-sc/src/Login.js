import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider} from './firebase'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => {
                alert(error.message);
            })
        }
    return (
        <div className="login">
            <div className="login_container">
                <img src= "https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-199wkt/Slack_Mark.svg" alt="" />
                <h1> Sign in to Slacky</h1>
                <p>sachin.slacky.com</p>
                <Button onClick={signIn}>Sign In from Google</Button>
            </div>
        </div>
    )
}

export default Login
