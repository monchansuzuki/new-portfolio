import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import ScrollMagic from "scrollmagic"
import { TimelineMax, Power3 } from "gsap"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"


import "./layout.style.scss"
import LogoComponent from "./logo/logo.component"

const Layout = ({ children }) => {


  const data = useStaticQuery(graphql`
      query {
          cardJson {
              description
              img {
                  childImageSharp {
                      fluid {
                          ...GatsbyImageSharpFluid
                      }
                  }
                  

              }
              icon {
                  childImageSharp {
                      fluid {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          } }
  `)
  console.log(data)
  let scrollItem = useRef(null)
  let titleItem = useRef(null)
  let cardItem = useRef(null)
  let cardDescription = useRef(null)
  useEffect(() => {

    const tl = new TimelineMax()
    tl.to(cardItem, 0.4, {x: -75, opacity: 1, ease: Power3.easeIn})
    tl.to(titleItem, 0.8, { x: -75, opacity: 1, ease: Power3.easeIn })
    tl.to(cardDescription, 2,{x: 3 , opacity: 1, ease: Power3.easeIn})
    tl.from(scrollItem, 0.5, { opacity: 0, scale: 0.2 })


    const tl2 = new TimelineMax({ repeat: -1, repeatDelay: 1 })
      .to(scrollItem, 0.8,{y: -10, ease: Power3.easeInOut})
      .to(scrollItem, 0.8,{y: 10, ease: Power3.easeInOut})

  }, [])

  return (
    <div className="container">
      <header>
        <LogoComponent/>
        <div>

        </div>
        <BackgroundImage ref={el=> {cardItem = el}} style={{ backgroundSize: "cover" }}
                         className="card"
                         fluid={data.cardJson.img.childImageSharp.fluid}>
          <h1 ref={el => titleItem = el}>ようこそ</h1>
          <p ref={el => cardDescription = el} className="description">{data.cardJson.description}</p>


        </BackgroundImage>
        <div ref={el => scrollItem = el} className="scroll">Scroll Down
          <Image className="icon" fluid={data.cardJson.icon.childImageSharp.fluid}/>
        </div>
      </header>
      <main>{children}</main>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
