import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import PropTypes from 'prop-types'
import "../styles/main.less"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.seo}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{data.homepage.title}</h1>
        </div>
      </div>
    </Layout>
  )
}

const query = graphql`
  query {
    homepage {
      title
    }
    seo {
      meta_title
      meta_description
    }
    infos {
      info_category
      description
    }
  }
`

export default IndexPage

IndexPage.propTypes = {
  strapiHomepage: PropTypes.shape({
    hero: PropTypes.shape({
      title: PropTypes.string,
    }),
    seo: PropTypes.shape({
      metaTitle: PropTypes.string,
      metaDescription: PropTypes.string,
    }),
  }),
}
