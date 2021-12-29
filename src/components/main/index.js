import * as React from "react"
import Hill from "../hill"
import Sun from "../sun"
import TextArea from "../TextArea"
import styled from "styled-components"

const Main = () => {
  return (
    <StyledMain>
      <Sun />
      <TextArea />
      <Hill />
    </StyledMain>
  )
}

export default Main

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
  padding-top: 5vh;
`
