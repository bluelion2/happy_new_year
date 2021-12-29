import * as React from "react"
import Hill from "../hill"
import Sun from "../sun"
import TextArea from "../TextArea"
import S from "./main.css"
const Main = () => {
  return (
    <S.Wrap>
      <Sun />
      <TextArea />
      <Hill />
    </S.Wrap>
  )
}

export default Main
