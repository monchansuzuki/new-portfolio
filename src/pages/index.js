import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout.component"
import ProjectPreview from "../components/project-preview/project-preview.component"



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
                      tag
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
        const tag = project.node.tag;
        return (
          <ProjectPreview tag={tag} fluid={img} key={index} title={title} description={description} slug={slug}/>
        )
      })}

    </Layout>
  )
}

export default IndexPage


