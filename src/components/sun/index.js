import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./index.css"

const Sun = () => {
  return (
    <div className="sun-wrap">
      <div className="sun" />
      <StaticImage className="cloud" src="../../images/cloud.png" alt="구름" />
      <StaticImage
        className="cloud-1"
        src="../../images/cloud.png"
        alt="구름"
      />
      <StaticImage
        className="white-cloud"
        src="../../images/white-cloud.png"
        alt="구름"
      />
      <StaticImage
        className="white-cloud-1"
        src="../../images/white-cloud.png"
        alt="구름"
      />
    </div>
  )
}

export default React.memo(Sun)
