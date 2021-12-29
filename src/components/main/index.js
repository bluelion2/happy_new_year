import * as React from "react"
import Hill from "../hill"
import Sun from "../sun"
import Text from "./text"
import "./index.css"

const Main = () => {
  return (
    <main className="main">
      <Sun />
      <Text />
      <Hill />
    </main>
  )
}

export default React.memo(Main)
