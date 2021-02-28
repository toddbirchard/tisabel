import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import { Layout, Itinerary, Details, Rsvp } from "../components"
import "../styles/main.less"

const IndexPage = ({ data }) => {
  const image = data.strapiHomepage.cover_image.childImageSharp.fluid

  return (
    <>
      <Layout>
        <section className="hero">
          <div className="hero-title">
            <h1>{data.strapiHomepage.title}</h1>
          </div>
          <Img fluid={image} />
        </section>
        <main>
          <Itinerary />
          <Details />
          <Rsvp />
        </main>
      </Layout>
    </>
  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    strapiHomepage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      cover_image: PropTypes.object.isRequired,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    strapiHomepage {
      title
      cover_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
