/**
 * Create the redux store
 * http://redux.js.org/docs/basics/Store.html
 *
 */

import { reducer as responsive, calculateResponsiveState } from 'responsive-redux'

import { Dimensions } from 'react-native'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

// redux logger with default options
import logger from 'redux-logger'

// import the developer defined breakpoints
import breakpoints from './breakpoints'

let middlewareArray = [
  logger
]

const middleware = compose(
  applyMiddleware(...middlewareArray)
)

const combineThese = {
  responsive
}

const reducersComposed = compose(combineThese)
const reducers = combineReducers(reducersComposed)

// empty in this example
const preloadedState = {}

export const store = createStore(reducers, preloadedState, middleware)

/**
 * This function will be called when the device orientation is changed
 */
const resize = () => {
  const { width, height } = Dimensions.get('window')
  store.dispatch(calculateResponsiveState({ width, height, breakpoints }))
}

// call immediately to initialize redux state
resize()

// add an event listener to React Native Dimensions
Dimensions.addEventListener('change', resize)

export default {
  store
}
