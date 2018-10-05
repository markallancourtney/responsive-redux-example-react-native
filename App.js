import React from 'react'
// import { Text, View } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'

import Example from './Example'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Example />
      </Provider>
    )
  }
}
