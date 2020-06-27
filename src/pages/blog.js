import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Blog
