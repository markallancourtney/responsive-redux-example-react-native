import React, { Component } from 'react'
import { ScrollView, View, Text, Linking, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import the selector
import { getResponsive } from 'responsive-redux'

import Grid from './Grid'

class Example extends Component {
  render () {
    const { responsive } = this.props

    const {
      breakpoints,
      dimensions,
      greaterThan,
      is,
      lessThan,
      mediaType,
      orientation
    } = responsive

    return (
      <ScrollView
        style={{
          marginTop: 30,
          margin: 10
        }}>

        <Text style={styles.h1}>
          responsive-redux-example-react-native
        </Text>

        <View style={styles.hr} />

        <Text>
            React Native example for
          {' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/markallancourtney/responsive-redux')}
          >
              responsive-redux
          </Text>
        </Text>

        <View style={styles.br} />

        <Text>
            This example code came from
          {' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/markallancourtney/responsive-redux-example-react-native')}
          >
            https://github.com/markallancourtney/responsive-redux-example-react-native
          </Text>
        </Text>

        <View style={styles.br} />

        <Text>
            This example uses
          {' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/evgenyrodionov/redux-logger')}
          >
            redux-logger
          </Text>
          {' '}
            so you can use the 'Debug Remote JS' feature in Expo and open the JavaScript console to see changes to the
            Redux state as you change device orientation
            and actions are dispatched.
        </Text>

        <View style={styles.br} />

        <Text>
            Change the device orientation or use a different device to see values below change.
        </Text>

        <View style={styles.br} />

        <Text>
            Below is the object returned by the getResponsive() selector.
        </Text>

        <View style={styles.br} />

        <View>
          <Grid
            name='breakpoints'
            object={breakpoints}
          />
          <Grid
            name='dimensions'
            object={dimensions}
          />
          <Grid
            name='greaterThan'
            object={greaterThan}
          />
          <Grid
            name='is'
            object={is}
          />
          <Grid
            name='lessThan'
            object={lessThan}
          />

          <View style={styles.row}>
            <Text style={styles.name}>
              mediaType
            </Text>

            <Text>
              {mediaType}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.name}>
              orientation
            </Text>

            <Text>
              {orientation}
            </Text>
          </View>

        </View>

      </ScrollView>
    )
  }
}

Example.propTypes = {
  responsive: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  const responsive = getResponsive(state)

  return {
    responsive
  }
}

export default connect(mapStateToProps)(Example)

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    textDecorationLine: 'underline'
  },
  hr: {
    borderWidth: 1,
    height: 1
  },
  br: {
    height: 20
  },
  name: {
    fontWeight: 'bold',
    marginRight: 5
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
