import React from "react"
import { isMobile } from "react-device-detect"
import "./index.css"

const Hill = () => {
  const onClick = () => {
    const name =
      window.prompt(
        "받으실 분 성함을 입력해주세요. \n입력하지 않으면 이름없이 생성됩니다."
      ) || ""

    const url = isMobile
      ? `https://bit.ly/3EzJUo3?name=${name}`
      : `https://every-happy-new-year.vercel.app?name=${name}`

    console.log("name", name)
    navigator.clipboard.writeText(url).then(() => {
      const text = name
        ? `링크가 만들어 졌습니다. \n${name}님에게 전달해주세요.`
        : "링크가 복사되었습니다. \n다른 분들에게도 인사해요."
      alert(text)
    })
  }

  // const onClick = () => {
  //   const url = isMobile
  //     ? "https://bit.ly/3EzJUo3"
  //     : "https://every-happy-new-year.vercel.app"
  //   navigator.clipboard.writeText(url).then(() => {
  //     alert("링크가 복사되었습니다. \n다른 분들에게도 인사해요.")
  //   })
  // }

  return (
    <footer className="hill">
      <button onClick={onClick}>전달하기</button>
    </footer>
  )
}

export default React.memo(Hill)
