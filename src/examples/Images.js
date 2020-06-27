import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import imag from "../images/connectBcg.jpeg"
import Img from "gatsby-image"

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={imag} className="basic" alt="hello" />
      </article>
      <article>
        <h3>Fixed Image/Blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid Image/SVG</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem;
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1 rem;
  }
`

export default Images
