import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import "../styles/main.less"

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1>{data.homepage.title}</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      title: PropTypes.string,
    }),
    seo: PropTypes.shape({
      meta_title: PropTypes.string,
      meta_description: PropTypes.string,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    homepage {
      title
    }
    seo {
      meta_title
      meta_description
      json_ltd
      favicon {
        url
      }
      logo {
        url
      }
      share_image {
        url
      }
    }
  }
`
