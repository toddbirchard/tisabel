import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import { Layout } from "../components/common"
import { Itinerary, Rsvp, Details, Donate } from "../components"
import "../styles/main.less"

const Homepage = ({ data }) => {
  const heroImage = data.strapiHomepage.cover_image.childImageSharp.fluid
  const logoImage = data.strapiHomepage.logo.childImageSharp.fluid

  return (
    <>
      <Layout>
        <section className="hero">
          <div className="hero-title">
            <Img className="logo" fluid={logoImage} />
            <h1>{data.strapiHomepage.title}</h1>
          </div>
          <Img className="hero-image" fluid={heroImage} />
        </section>
        <main>
          <div className="information">
            <Details />
            <Itinerary />
            <Rsvp />
            <Donate />
          </div>
        </main>
      </Layout>
    </>
  )
}

Homepage.propTypes = {
  data: PropTypes.shape({
    strapiHomepage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      cover_image: PropTypes.object.isRequired,
      logo: PropTypes.object.isRequired,
    }),
  }),
}

export const query = graphql`
  query HomePageQuery {
    strapiHomepage {
      title
      cover_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Homepage
