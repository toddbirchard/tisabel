import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import MetaData from "./metadata"


const Layout = ({ data, template, children }) => {
  const pageClasses = template && template

  return (
    <>
      <MetaData seo={data.strapiSeo} pageClasses={pageClasses} />
      <div className="layout">
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  data: PropTypes.shape({
    strapiSeo: PropTypes.shape({
      meta_title: PropTypes.string,
      meta_description: PropTypes.string,
    }),
  }),
  template: PropTypes.string,
}

const LayoutQuery = props => (
  <StaticQuery
    query={graphql`
      query seoQuery {
        strapiSeo {
          meta_title
          meta_description
          canonical
          logo {
            childImageSharp {
              gatsbyImageData
            }
          }
          share_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      `}
    render={data => <Layout data={data} {...props} />}
  />
)

export default LayoutQuery
