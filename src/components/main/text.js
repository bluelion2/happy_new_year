import * as React from "react"

const Text = () => {
  const [text, setText] = React.useState("")

  React.useEffect(() => {
    const i = Math.floor(Math.random() * 10)

    console.log("window", window.location.hash)
    const hash = window.location.hash || undefined
    if (hash) {
      const decode = hash.slice(1, hash.length)
      const decodeName = decodeURIComponent(decode)
      setText(`${decodeName}님. ${guide[0]}`)
    } else {
      setText(guide[i])
    }
  }, [])

  return (
    <section>
      <h2>2022년</h2>
      {/* <h2>{new Date().getFullYear()}년</h2> */}
      <h1>근하신년</h1>
      <p>{text}</p>
    </section>
  )
}

export default React.memo(Text)

const guide = [
  "새해 복 많이 받으세요.",
  "좋은 일만 가득하길 바랍니다.",
  "항상 건강하시고 행복한 일만 가득하길..",
  "복권당첨! 청약당첨! 집값상승!",
  "무병장수, 운수대통 하시길 바랍니다.",
  "희망찬 새해가 되길 바래요.",
  "행복 가득한 새해 되세요.",
  "건강하고 평온한 한 해 되세요.",
  "새해 복 많이 받으세요.",
  "항상 건강하시고 행복한 일만 가득하길..",
  "새해 복 많이 받으세요.",
]
