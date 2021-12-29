import React from "react"
import styled from "styled-components"

const TextArea = () => {
  const [text, setText] = React.useState("")
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const i = Math.floor(Math.random() * 10)
    setText(guide[i])
    setVisible(true)
  }, [])

  return (
    <StyledTextArea>
      {visible && (
        <>
          <h2>{new Date().getFullYear()}</h2>
          <h1>근하신년</h1>
          <p>{text}</p>
        </>
      )}
    </StyledTextArea>
  )
}

export default TextArea

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

const StyledTextArea = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3vh;
  h1 {
    font-family: "궁서체";
    font-size: 48px;
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
