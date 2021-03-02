import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from "../components/common"
import { Itinerary, Rsvp, Donate, Hero } from "../components"
import { Details } from "../components/details"
import "../styles/main.scss"

const Homepage = ({ data }) => (
  <>
    <Layout>
      <Hero homepage={data.strapiHomepage} />
      <main>
        <Details />
        <Itinerary />
        <Rsvp />
        <Donate />
      </main>
    </Layout>
  </>
)

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
