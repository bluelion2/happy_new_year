import React from "react"
import { isMobile } from "react-device-detect"
import "./index.css"
import ReactDOM from "react-dom"
import Modal from "react-modal"

const customStyles = {
  overlay: {
    background: "rgba(0,0,0,.5)",
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
  },
  content: {
    overflow: "visible",
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    borderRadius: "5px",
    boxShadow: `0 0 50px 0 rgba(0, 0, 0, 0.1)`,
    padding: "0 !important",
  },
}

const Hill = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [name, setName] = React.useState("")

  function onSubmit() {
    const url = isMobile
      ? `https://bit.ly/3EzJUo3#${name}`
      : `https://every-happy-new-year.vercel.app#${name}`

    navigator.clipboard.writeText(url).then(() => {
      alert("링크가 복사되었습니다. \n다른 분들에게도 인사해요.")
    })

    setIsOpen(false)
  }

  function onSubmitWithoutName() {
    const url = isMobile
      ? "https://bit.ly/3EzJUo3"
      : "https://every-happy-new-year.vercel.app"

    navigator.clipboard.writeText(url).then(() => {
      alert("링크가 복사되었습니다. \n다른 분들에게도 인사해요.")
    })
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <footer className="hill">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <section className="modal">
          <input
            type="text"
            value={name}
            maxLength={10}
            onChange={e => setName(e.target.value)}
            placeholder="이름을 입력해주세요."
          />
          <div>
            <button onClick={onSubmitWithoutName}>이름없이 만들기</button>
            <button onClick={onSubmit}>이름넣고 만들기</button>
          </div>
        </section>
      </Modal>
      <button onClick={openModal}>공유하기</button>
    </footer>
  )
}

export default React.memo(Hill)
