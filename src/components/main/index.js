import * as React from "react"
import Hill from "../hill"
import Sun from "../sun"
import TextArea from "../TextArea"
import styled from "styled-components"

const Main = () => {
  const [text, setText] = React.useState("")
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const i = Math.floor(Math.random() * 10)
    setText(guide[i])
    setVisible(true)
  }, [])

  return (
    <StyledMain>
      {visible && (
        <>
          <Sun />
          <TextArea text={text} />
          <Hill />
        </>
      )}
    </StyledMain>
  )
}

export default Main

const guide = [
  "새해 복 많이 받으세요.",
  "좋은 일만 가득하길 바랍니다.",
  "항상 건강하시고 행복한 일만 가득하길..",
  "복권당첨.청약당첨.집값상승",
  "무병장수, 운수대통 하시길 바랍니다.",
  "새해 복 많이 받으세요.",
  "좋은일만 가득하길 바랍니다.",
  "항상 건강하시고 행복한 일만 가득하길..",
  "새해 복 많이 받으세요.",
  "항상 건강하시고 행복한 일만 가득하길..",
  "새해 복 많이 받으세요.",
]

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
  padding-top: 5vh;
`