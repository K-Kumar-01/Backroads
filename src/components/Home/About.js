import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(getAbout)
  console.log(data.aboutImage.childImageSharp.fluid)
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="About Company" /> */}
            <Img
              fluid={data.aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            autem quos voluptas exercitationem doloribus, neque atque illo quas
            commodi provident maxime! Vero eaque illo expedita itaque odit
            ipsum. Ipsum, quod.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            autem
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
