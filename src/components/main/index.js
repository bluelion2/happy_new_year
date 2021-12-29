import * as React from "react"
import Hill from "../hill"
import Sun from "../sun"
import Text from "./text"
import styled from "styled-components"

const Main = () => {
  return (
    <StyledMain>
      <Sun />
      <Text />
      <Hill />
    </StyledMain>
  )
}

export default React.memo(Main)

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
  padding-top: 5vh;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 3vh;
    h1 {
      font-size: 48px;
      font-family: "궁서체", "ChosunGs";
    }

    h2 {
      font-size: 36px;
      font-family: "궁서체", "ChosunGs";
    }

    p {
      font-size: 18px;
    }

    animation: visible 3s ease-in-out;

    @keyframes visible {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`
