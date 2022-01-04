import {
    LOGIN,
    LOGOUT
} from "../types/userType";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';
// cheroki - no entiendo por qué, pero si elimino este import, salta un error de firebase,
// a pesar de que no se está usando en ningún sitio
import { googleAuthProvider } from "../../utils/firebaseConfig";


const auth = getAuth();

export const registerWithNameEmailPassword = (name, email, password) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({
                user
            }) => {
                await updateProfile(auth.currentUser, {
                    displayName: name
                })
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => console.log(e))
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
