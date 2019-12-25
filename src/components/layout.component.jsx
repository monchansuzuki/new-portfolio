import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { TimelineMax, Power3,CSSPlugin } from "gsap/all"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"


import "./layout.style.scss"
import LogoComponent from "./logo/logo.component"

const Layout = ({ children }) => {
const plugin = CSSPlugin;

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
          }

          bgJson {
              img {
                  childImageSharp {
                      fluid (duotone: {
                          highlight: "#2d4387",
                          shadow: "#000000",
                      },
                          rotate: 180
                      ){
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }

          allIconJson {
              edges {
                  node {
                      socialIcon {
                          publicURL
                      }
                  }
              }
          }
      }
  `)
  console.log(data)
  let scrollItem = useRef(null)
  let titleItem = useRef(null)
  let cardItem = useRef(null)
  let cardDescription = useRef(null)



  useEffect(() => {
    const C = CSSPlugin;  // here is the gotcha....

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
      <BackgroundImage className="bg" fluid={data.bgJson.img.childImageSharp.fluid}>
        <LogoComponent/>
        <div>

        </div>
        <BackgroundImage ref={el => cardItem = el} style={{ backgroundSize: "cover" }}
                         className="card"
                         fluid={data.cardJson.img.childImageSharp.fluid}>
          <h1 ref={el => titleItem = el}>ようこそ</h1>
          <p ref={el => cardDescription = el} className="description">{data.cardJson.description}</p>


        </BackgroundImage>
        <div ref={el => scrollItem= el} className="scroll">Scroll Down
          <Image className="icon" fluid={data.cardJson.icon.childImageSharp.fluid}/>
        </div>
      </BackgroundImage>
      <main>{children}</main>


      <footer>
        <LogoComponent/>
        <div className="flex">
          {data.allIconJson.edges[0].node.socialIcon.map((el, i) => {
            return (<a href=""key={i}><img className="icon-s"  src={el.publicURL} alt=""/></a>)
          })}
        </div>
      </footer>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
