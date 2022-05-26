import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer'
import { notesReducer } from '../reducers/notesReducer'
import { uiReducer } from '../reducers/uiReducer'

const reducers = combineReducers(
  {
    auth: authReducer,
    notes: notesReducer,
    ui: uiReducer
  }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)
