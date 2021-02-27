import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import "../styles/main.less"

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1>{data.strapiHomepage.title}</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    strapiHomepage: PropTypes.shape({
      title: PropTypes.string,
    }),
    strapiSeo: PropTypes.shape({
      meta_title: PropTypes.string,
      meta_description: PropTypes.string,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    strapiHomepage {
      title
    }
    strapiSeo {
      meta_title
      meta_description
      logo {
        childImageSharp {
        fluid {
          originalImg
          srcSet
        }
      }
      }
      share_image {
        childImageSharp {
        fluid {
          originalImg
          srcSet
        }
      }
      }
    }
    allStrapiInfo {
      edges {
        node {
          description
          info_category {
            name
            image {
              id
            }
          }
        }
      }
    }
  }
`
