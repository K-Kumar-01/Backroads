import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import BlogCard from "../components/Blog/BlogCard"
import Title from "../components/Title"

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      limit: $limit
      skip: $skip
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "dddd MMMM do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogList = props => {
  const { data } = props
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="Latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink
              fade
              to={`blogs/${currentPage <= 2 ? "" : currentPage - 1}`}
              className={styles.link}
            >
              PREV
            </AniLink>
          )}

          {Array.from({ length: numPages }, (_, index) => {
            return (
              <AniLink
                fade
                to={`/blogs/${index === 0 ? "" : index + 1}`}
                className={
                  index + 1 === currentPage
                    ? `${styles.active} ${styles.link}`
                    : styles.link
                }
              >
                {index + 1}
              </AniLink>
            )
          })}

          {!isLast && (
            <AniLink
              fade
              to={`/blogs/${
                currentPage === numPages ? currentPage : currentPage + 1
              }`}
              className={styles.link}
            >
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export default BlogList
