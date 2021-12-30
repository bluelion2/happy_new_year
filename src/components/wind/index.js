import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./index.css"

const Wind = () => {
  return (
    <div className="wind">
      <StaticImage className="wind-1" src="../../images/wind.png" alt="바람" />
      <StaticImage className="wind-2" src="../../images/wind.png" alt="바람" />
      <StaticImage className="wind-3" src="../../images/wind.png" alt="바람" />
      <StaticImage className="wind-4" src="../../images/wind.png" alt="바람" />

      <StaticImage
        className="cloud-1"
        src="../../images/cloud.png"
        alt="구름"
      />
      <StaticImage
        className="cloud-2"
        src="../../images/cloud.png"
        alt="구름"
      />
      <StaticImage
        className="cloud-3"
        src="../../images/cloud.png"
        alt="구름"
      />
      <StaticImage
        className="white-cloud"
        src="../../images/white-cloud.png"
        alt="하얀구름"
      />
      <StaticImage
        className="white-cloud-2"
        src="../../images/white-cloud.png"
        alt="하얀구름"
      />
    </div>
  )
}

export default Wind
