import React from "react"
import styled from "styled-components"

const Sun = () => {
  return (
    <>
      <StyledSun />
    </>
  )
}

export default Sun

const StyledSun = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  width: 60vw;
  height: 60vw;
  border-radius: 50%;
  background-color: rgba(255, 80, 30, 0.9);
  animation: rise 2s ease-in-out;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes rise {
    0% {
      top: 100px;
    }

    100% {
      top: 20px;
    }
  }
`
