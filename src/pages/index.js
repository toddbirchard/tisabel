import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from "../components/common"
import { Itinerary, Rsvp, Hero, Venue } from "../components"
import { Details } from "../components/details"
import { RegistryList } from "../components/registry"

import "../styles/main.scss"

const Homepage = ({ data }) => (
  <>
    <Layout>
      <Hero homepage={data.strapiHomepage} />
      <main>
        <Details />
        <div>
          <Venue />
          <Itinerary />
        </div>
        <Rsvp />
        <RegistryList />
      </main>
    </Layout>
  </>
)

Homepage.propTypes = {
  data: PropTypes.shape({
    strapiHomepage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      cover_image: PropTypes.object.isRequired,
    }),
  }),
}

export const query = graphql`
  query HomePageQuery {
    strapiHomepage {
      title
      cover_image {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, JPG]
            placeholder: BLURRED
            width: 1050
          )
        }
      }
      cover_image_mobile {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, JPG]
            placeholder: BLURRED
          )
        }
      }
    }
  }
`

export default Homepage
