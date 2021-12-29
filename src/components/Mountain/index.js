import React from "react"
import styled from "styled-components"

const Mountain = () => {
  return <StyledMountain />
}

export default Mountain

const StyledMountain = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 15vh;
  border-top-left-radius: 45%;
  border-top-right-radius: 45%;
  background: lightgray;
`
