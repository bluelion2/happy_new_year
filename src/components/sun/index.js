import React from "react"
import styled from "styled-components"

const Sun = () => {
  return <StyledSun />
}

export default Sun

const StyledSun = styled.div`
  display: flex;
  width: 60vw;
  height: 60vw;
  border-radius: 50%;
  background-color: rgba(255, 80, 30, 0.9);

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`
