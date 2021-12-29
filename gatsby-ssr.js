/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

exports.onRenderBody = () => {
  if (window.console !== undefined) {
    const cssRule = "font-size:40px;"
    const githubCss = "color:skyblue"
    setTimeout(() => {
      console.log.bind(console, "Hello World", cssRule)
    }, 0)
    setTimeout(() => {
      console.log.bind(console, "https://github.com/bluelion2", githubCss)
    }, 0)
  }
}
