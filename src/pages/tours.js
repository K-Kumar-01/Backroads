import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"
import SEO from "../components/SEO"

const TourPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Tours" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default TourPage
