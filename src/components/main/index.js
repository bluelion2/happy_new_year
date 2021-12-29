import * as React from "react"
import Hill from "../components/Hill"
import Sun from "../components/sun"
import TextArea from "../components/TextArea"
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
