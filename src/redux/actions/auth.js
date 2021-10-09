import {
    LOGIN,
    REGISTER
} from "../types/userType";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';
import {
    googleAuthProvider
} from "../../utils/firebaseConfig";

const auth = getAuth()

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({
                user
            }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => console.log(e))

    }
}

export const registerWithNameEmailPassword = (name, email, password) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({
                user
            }) => {
                await updateProfile(auth.currentUser, {
                    displayName: name
                })

                // console.log(user)
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => console.log(e))
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({
                user
            }) => {
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

// export const register = (uid, displayName, phone) => ({
//     type: REGISTER,
//     payload: {
//         uid,
//         displayName,
//         phone
//     }
// })