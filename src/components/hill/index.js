import React from "react"
import styled from "styled-components"

const Hill = () => {
  const onClick = () => {
    const url = "bit.ly/3EzJUo3"
    navigator.clipboard.writeText(url).then(() => {
      alert("링크가 복사되었습니다. \n다른 분들에게도 인사해요.")
    })
  }

  return (
    <StyledHill>
      <button onClick={onClick}>전달하기</button>
    </StyledHill>
  )
}

export default Hill

const StyledHill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 15vh;
  border-top-left-radius: 45%;
  border-top-right-radius: 45%;
  background: lightgray;
  button {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    color: black;
  }
`
