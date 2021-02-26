import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'


const Layout = ({ data }) => (
  <Helmet>
    <html lang={`en`} />
    <body />
  </Helmet>
)

Layout.propTypes = {
  data: PropTypes.object,
}
