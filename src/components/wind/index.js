import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./index.css"

const Wind = () => {
  return (
    <div className="wind">
      {/* <StaticImage
        className="wind-3"
        src="../../images/wind.svg"
        alt="wind-svg"
      />
      <StaticImage
        className="wind-4"
        src="../../images/wind.svg"
        alt="wind-svg"
      />
      <StaticImage
        className="cloud-1"
        src="../../images/cloud.svg"
        alt="cloud-svg"
      />
      <StaticImage
        className="cloud-2"
        src="../../images/cloud.svg"
        alt="cloud-svg"
      />
      <StaticImage
        className="cloud-3"
        src="../../images/cloud.svg"
        alt="cloud-svg"
      /> */}
      <StaticImage
        className="white-cloud"
        src="../../images/white-cloud.png"
        alt="cloud-svg"
      />
      {/* <StaticImage
        className="white-cloud-2"
        src="../../images/white-cloud.svg"
        alt="cloud-svg"
      /> */}
    </div>
  )
}

export default Wind
