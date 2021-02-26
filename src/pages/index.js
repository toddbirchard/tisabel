import React from "react"
import Layout from "../components/layout"
import PropTypes from 'prop-types'
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
