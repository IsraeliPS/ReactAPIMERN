import Swal from 'sweetalert2'

import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types/types'
import { noteLogout } from './notes'
import { finishLoading, startLoading } from './ui'

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())

    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
        dispatch(finishLoading())
      })
      .catch((err) => {
        console.log(err)
        dispatch(finishLoading())
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      })
  }
}

export const startRegisterEmailPassword = (name, email, password) => {
  return (dispatch) => {
    dispatch(startLoading())

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name })
        dispatch(login(user.uid, user.displayName))
      })
      .catch(err => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      })
  }
}

export const startGoogleLogin = () => {
  return dispatch => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
      })
  }
}

export const login = (uid, displayName) => (
  {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
)

export const startLogout = () => {
  return async dispatch => {
    await firebase.auth().signOut()
    dispatch(logout())
    dispatch( noteLogout ())
  }
}

export const logout = () => ({
  type: types.logout
})
