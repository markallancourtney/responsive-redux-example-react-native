import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

class Grid extends Component {
  render () {
    const { name, object } = this.props

    return (
      <View>
        <Text style={styles.name}>
          {name}
        </Text>

        {Object.keys(object).map(key => {
          return (
            <View
              key={key}
              style={styles.row}
            >
              <Text style={styles.key}>
                {key}
              </Text>
              {'  '}
              <Text style={styles.value}>
                {'' + object[key]}
              </Text>
            </View>
          )
        })}
      </View>
    )
  }
}

Grid.propTypes = {
  name: PropTypes.string,
  object: PropTypes.object
}

export default Grid

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10
  },
  key: {
    textDecorationLine: 'underline',
    marginRight: 5
  },
  value: {}
})
