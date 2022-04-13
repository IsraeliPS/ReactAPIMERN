
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
  , Route
} from 'react-router-dom'
import { JournalScreen } from '../journal/JournalScreen'

// import { useDispatch } from 'react-redux'

// import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter'
// import { PrivateRoute } from './PrivateRoute'


// import { login } from '../actions/auth'
// import { PublicRoute } from './PublicRoute'
// import { startLoadingNotes } from '../actions/notes'

export const AppRouter = () => {
  // const dispatch = useDispatch()

  // const [checking, setChecking] = useState(true)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(async (user) => {
  //     if (user?.uid) {
  //       dispatch(login(user.uid, user.displayName))
  //       setIsLoggedIn(true)
  //       dispatch(startLoadingNotes(user.uid))
  //     } else {
  //       setIsLoggedIn(false)
  //     }

  //     setChecking(false)
  //   })
  // }, [dispatch, setChecking, setIsLoggedIn])

  // if (checking) {
  //   return (
  //     <h1>Wait...</h1>
  //   )
  // }
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path='/auth'
            component={AuthRouter}
          />
          <Route
            exact
            path='/'
            component={JournalScreen}
          />
          {/* <PublicRoute
            path='/auth'
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path='/'
            component={JournalScreen}
          /> */}

          <Redirect to='/auth/login' />

        </Switch>
      </div>
    </Router>
  )
}
