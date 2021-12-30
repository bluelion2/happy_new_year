import * as React from "react"
import Hill from "../hill"
import Sun from "../sun"
import Text from "./text"
import "./index.css"
import Wind from "../wind"
const Main = () => {
  return (
    <main className="main">
      <Sun />
      <Text />
      <Hill />
      <Wind />
    </main>
  )
}

export default React.memo(Main)
