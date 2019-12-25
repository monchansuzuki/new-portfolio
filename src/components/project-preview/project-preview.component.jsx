import React , { useRef, useEffect}from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import "./project-preview.style.scss"
import { TimelineMax,TweenMax, Power3} from "gsap"






const ProjectPreviewComponent = ({ title, description, slug, fluid ,tag}) => {

  let scrollStart = useRef(null)
  let titleItem = useRef(null)



  useEffect(() => {



  },[])



  return (
    <section ref={el => scrollStart = el}>
      <h2 ref={el => titleItem = el}>{title}</h2>
      <div className="badge-container">
        {tag.map( (data, i) => <span className="badge" key={i}>{data}</span>)}
      </div>
      <div className="card-item">

        <div className="img-container">
          <Image fluid={fluid}/>

        </div>
        <div className="item-container">
          <p className="description-pro">{description}</p>

          <a  className="link" href={`${slug}`}  target="_blank">プロジェクトに移動する</a>
        </div>

      </div>
    </section>
  )
}

export default ProjectPreviewComponent
