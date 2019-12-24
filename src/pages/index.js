import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout.component"
import ProjectPreview from "../components/project-preview/project-preview.component"
import {TweenMax, TimelineMax} from "gsap"
import { Helmet } from "react-helmet"


const IndexPage = () => {
  // const projects = data.allProjectsJson.edges;

   const data = useStaticQuery(graphql`

      query {
          allProjectsJson {
              edges {
                  node {
                      title
                      url
                      slug
                      description
                      image {
                          publicURL
                          childImageSharp{
                              fluid {
                                  ...GatsbyImageSharpFluid
                              }
                          }
                      }
                  }
              }
          }
          
      }

  `)
  return (

    <Layout>
      {data.allProjectsJson.edges.map( (project, index) => {
        const title = project.node.title;
        const slug = project.node.slug;
        const description = project.node.description;
        const img = project.node.image.childImageSharp.fluid
        return (
          <ProjectPreview fluid={img} key={index} title={title} description={description} slug={slug}/>
        )
      })}

    </Layout>
  )
}

export default IndexPage


