import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import { Layout, Itinerary, Details, Rsvp } from "../components"
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
            <div>
              <h2>Gifts</h2>
            </div>
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

const HomepageQuery = props => (
  <StaticQuery
    query={graphql`
      query homepage {
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
    `}
    render={data => <Homepage data={data} {...props} />}
  />
)

export default HomepageQuery
