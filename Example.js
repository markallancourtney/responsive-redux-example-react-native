import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'




// import the selector
import { getResponsive } from 'responsive-redux'

class Example extends Component {
  render () {
    const { responsive } = this.props

    return (
      <div
        style={{
          margin: 10
        }}>
        <h1>
          responsive-redux-example-react-web
        </h1>

        <hr />

        <div>
          <p>
            React web example for <a href='https://github.com/markallancourtney/responsive-redux' target='_blank' rel='noopener noreferrer'>responsive-redux</a>
          </p>

          <p>
            This example code came from <a href='https://github.com/markallancourtney/responsive-redux-example-react-web' target='_blank' rel='noopener noreferrer'>this respository</a>
          </p>

          <p>
            This example uses <a href='https://github.com/evgenyrodionov/redux-logger' target='_blank' rel='noopener noreferrer'>redux-logger</a>,
            so you can open the JavaScript console and see changes to the Redux state as you resize the browser window and actions are dispatched.
          </p>
        </div>

        <div />

        <div>
          <div>
            <p>
                Resize the browser window to see values below change.
            </p>
            <p>
                Below is the object returned by the getResponsive() selector.
            </p>
          </div>

          <div>
            <ObjectInspector data={responsive} expandLevel={5} />
          </div>

        </div>

        <hr />

      </div>
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
