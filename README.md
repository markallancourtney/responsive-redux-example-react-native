# responsive-redux-example-react-native

This is an example of how to use <a href="https://github.com/markallancourtney/responsive-redux" target="_blank">responsive-redux</a> with React Native.


This project uses <a href="https://expo.io/" target="_blank">Expo</a> (https://expo.io/) for super quick and easy setup of the React Native app on your machine.

Expo is installed locally for this project.


# Usage
- Clone this repository
    - `git clone https://github.com/markallancourtney/responsive-redux-example-react-native.git`
- Change into this project directory
    - `cd responsive-redux-example-react-native`
- Install dependencies
    - `npm install`
- Start Expo
    - `npm start`
- Open the device simulator of your choice - iOS or Android
- Change the orientation of the simulator device and watch the values on the screen change
    - Since the screen dimensions are static in a native app, you will need to change devices in your simulator in order to see the screen size change.
- Use the 'Debug Remote JS' in Expo feaure to see <a href='https://github.com/evgenyrodionov/redux-logger' target='_blank' rel='noopener noreferrer'>redux-logger</a> output when actions are dispatched and the Redux state changes.
    - Redux actions are dispatched when device orientation changes.



# File descriptions
- `App.js`
    - React app entry point. This is where the store is passed as a prop to the react-redux Provider.
- `store.js`
    - Shows how to set up the Redux store for use with React Native
- `breakpoints.js`
    - Developer defined breakpoints. Name and pixel size of breakpoints defined in this file.
