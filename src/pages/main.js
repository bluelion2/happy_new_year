import * as React from "react"
import Mountain from "../components/Mountain"
import Sun from "../components/sun"
import TextArea from "../components/TextArea"
import S from "./main.css"
const Main = () => {
  return (
    <S.Wrap>
      <Sun />
      <TextArea />
      <Mountain />
    </S.Wrap>
  )
}

export default Main
