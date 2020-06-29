import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import ContactForm from "../components/Contact/Contact"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.connectBcg.childImageSharp.fluid} />
      <ContactForm />
    </Layout>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Contact
