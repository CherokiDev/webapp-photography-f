import {
    LOGIN,
    LOGOUT,
    REGISTER
} from "../types/userType";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';
import {
    googleAuthProvider
} from "../../utils/firebaseConfig";
import {
    finishLoading,
    startLoading
} from "./ui";

const auth = getAuth()

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))

                dispatch(finishLoading())
            })
            .catch(e => {
                console.log(e)
                dispatch(finishLoading())
            })

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

export const startLogout = () => {
    return (dispatch) => {
        signOut(auth)
        .then(() => {
            dispatch(logout());
        })
        .catch((err) => err)
    }
}

export const logout = () => ({
    type: LOGOUT
})

// export const register = (uid, displayName, phone) => ({
//     type: REGISTER,
//     payload: {
//         uid,
//         displayName,
//         phone
//     }
// })