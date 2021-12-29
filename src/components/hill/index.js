import React from "react"
import "./index.css"

const Hill = () => {
  const onClick = () => {
    const url = "bit.ly/3EzJUo3"
    navigator.clipboard.writeText(url).then(() => {
      alert("링크가 복사되었습니다. \n다른 분들에게도 인사해요.")
    })
  }

  return (
    <footer className="hill">
      <button onClick={onClick}>전달하기</button>
    </footer>
  )
}

export default React.memo(Hill)
