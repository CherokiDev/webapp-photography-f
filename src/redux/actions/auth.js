import {
    LOGIN
} from "../types/userType";
import {signInWithPopup, getAuth} from 'firebase/auth';
import { googleAuthProvider } from "../../utils/firebaseConfig";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123,'juan'))
        }, 3000);
    }
}

export const startGoogleLogin = () => {
    const auth = getAuth()
    return(dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
        })
    }
}

export const login = (uid, displayName) => ({
    type: LOGIN,
    payload: {
        uid,
        displayName
    }
})