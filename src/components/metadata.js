import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const MetaData = ({ seo }) => (
  <Helmet>
    <meta name="description" content={seo.meta_description}/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    {/* <link rel="canonical" href={canonical}/> */}

    {/* Facebook */}
    <meta property="og:site_name" content={seo.meta_title}/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content={seo.meta_title}/>
    <meta property="og:description" content={seo.meta_description}/>
    {/* <meta property="og:url" content={canonical}/> */}

    {/* Twitter */}
    <meta name="twitter:title" content={seo.meta_title}/>
    <meta name="twitter:description" content={seo.meta_description}/>
    {/* <meta name="twitter:url" content={canonical}/> */}
  </Helmet>
)

export default MetaData

MetaData.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
  }),
}
