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

// export const startLoginEmailPassword = (email, password) => {
//     return (dispatch) => {
//         dispatch(startLoading());

//         signInWithEmailAndPassword(auth, email, password)
//             .then(({
//                 user
//             }) => {
//                 dispatch(login(user.uid, user.displayName))

//                 dispatch(finishLoading())
//             })
//             .catch(e => {
//                 console.log(e)
//                 dispatch(finishLoading())
//             })

//     }
// }

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

// export const startGoogleLogin = () => {
//     return (dispatch) => {
//         signInWithPopup(auth, googleAuthProvider)
//             .then(({user}) => {
//                 Swal.fire({
//                     showConfirmButton: false,
//                     timer: 2000,
//                     timerProgressBar: true,
//                     icon: 'success',
//                     text: 'Sesión iniciada correctamente'
//                 })
                    
         
//                 dispatch(
//                     login(user.uid, user.displayName)
//                 )
//                 setTimeout(() => {
//                     history.push("/profile")
//                 }, 500)

//             })
//             .catch(e => console.log(e))
//     }
// }

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