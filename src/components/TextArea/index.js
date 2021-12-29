import React from "react"
import styled from "styled-components"

const TextArea = ({ text }) => {
  return (
    <StyledTextArea>
      <h2>2022</h2>
      {/* <h2>{new Date().getFullYear()}</h2> */}
      <h1>근하신년</h1>
      <p>{text}</p>
    </StyledTextArea>
  )
}

export default TextArea

const StyledTextArea = styled.section`
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
`
