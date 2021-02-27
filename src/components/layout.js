import React from 'react'
import PropTypes from 'prop-types'
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
  data: PropTypes.object,
}

export default Layout
