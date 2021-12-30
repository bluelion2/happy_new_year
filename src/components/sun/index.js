import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./index.css"

const Sun = () => {
  return (
    <div className="sun-wrap">
      <div className="sun" />
      <StaticImage
        className="black-cloud cloud"
        src="../../images/cloud.png"
        alt="구름"
      />
      <StaticImage
        className="black-cloud-1 cloud"
        src="../../images/cloud.png"
        alt="구름"
      />
      <StaticImage
        className="white-cloud cloud"
        src="../../images/white-cloud.png"
        alt="구름"
      />
      <StaticImage
        className="white-cloud-1 cloud"
        src="../../images/white-cloud.png"
        alt="구름"
      />
    </div>
  )
}

export default React.memo(Sun)
