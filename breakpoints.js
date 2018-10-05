/**
 * responsive-redux-example-react-native
 *
 * Developer defined breakpoints
 */

/**
 * Breakpoint is the largest value in the range
 */

const breakpoints = {
  extraSmall: 320,
  small: 667, // protrait height of iPhone 6
  medium: 768, // width of average tablet
  large: 1024, // height of average tablet
  extraLarge: 1300,
  infinity: Infinity // When the browser is wider than the largest breakpoint, the `mediaType` value is `infinity`.
}

export default breakpoints
