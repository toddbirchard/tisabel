import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from "../components/common"
import { Itinerary, Rsvp, Hero, Venue, Details, Welcome } from "../components"
import { RegistryList } from "../components/registry"


import "../styles/main.scss"

const Homepage = ({ data }) => (
  <>
    <Layout>
      <Hero homepage={data.strapiHomepage} />
      <div className="main-content">
        <main>
          <div>
            <Welcome introText={data.strapiHomepage.welcomeBlurb} />
            <Details />
          </div>

          <aside className="sidebar">
            <Venue />
            <Itinerary />
            <RegistryList />
          </aside>

          <Rsvp />
        </main>
      </div>
    </Layout>
  </>
)

Homepage.propTypes = {
  data: PropTypes.shape({
    strapiHomepage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      welcomeBlurb: PropTypes.string.isRequired,
      cover_image: PropTypes.object.isRequired,
    }),
  }),
}

export const query = graphql`
  query HomePageQuery {
    strapiHomepage {
      title
      welcomeBlurb
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
