import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import MetaData from "./MetaData"


const Layout = ({ data, children }) => (
  <>
    <MetaData seo={data.strapiSeo} />
    <div className="layout">
      {children}
    </div>
  </>
)

Layout.propTypes = {
  data: PropTypes.shape({
    strapiSeo: PropTypes.shape({
      meta_title: PropTypes.string,
      meta_description: PropTypes.string,
    }),
  }),
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
            }
        `}
    render={data => <Layout data={data} {...props} />}
  />
)

export default LayoutQuery
