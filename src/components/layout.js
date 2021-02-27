import React from 'react'
import PropTypes from 'prop-types'
import MetaData from "../components/metadata"



const Layout = ({ data }) => (
  <MetaData seo={data.strapiSeo} />
)

Layout.propTypes = {
  data: PropTypes.object,
}

export default Layout
