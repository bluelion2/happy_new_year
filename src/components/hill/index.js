import React from "react"
import { isMobile } from "react-device-detect"
import "./index.css"

const Hill = () => {
  const onClick = () => {
    const url = isMobile
      ? "https://bit.ly/3EzJUo3"
      : "https://every-happy-new-year.vercel.app"
    navigator.clipboard.writeText(url).then(() => {
      alert("링크가 복사되었습니다. \n다른 분들에게도 인사해요.")
    })
  }

  return (
    <footer className="hill">
      <button onClick={onClick}>공유하기</button>
    </footer>
  )
}

export default React.memo(Hill)
