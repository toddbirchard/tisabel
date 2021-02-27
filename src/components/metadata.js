import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const MetaData = ({ seo }) => (
  <Helmet>
    <html lang="en-US" />
    <title>{seo.meta_title}</title>
    <meta name="description" content={seo.meta_description}/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="canonical" href={seo.canonical}/>

    {/* Facebook */}
    <meta property="og:site_name" content={seo.meta_title}/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content={seo.meta_title}/>
    <meta property="og:description" content={seo.meta_description}/>
    <meta property="og:url" content={seo.canonical}/>

    {/* Twitter */}
    <meta name="twitter:title" content={seo.meta_title}/>
    <meta name="twitter:description" content={seo.meta_description}/>
    <meta name="twitter:url" content={seo.canonical}/>

    <script type="application/ld+json">
      {`
        {
        "endDate": "07/31/2021 02:00PM",
        "name": "Tisabel4Ever",
        "url": "https://tisabel4ever.com/",
        "@context": "https://schema.org/",
        "startDate": "07/30/2021 3:00PM",
        "location": {
          "@type": "Place",
          "name": "Mr. Purple",
          "sameAs": "https://www.mrpurplenyc.com/",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "180 Orchard Street, 15th floor",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10002",
            "addressCountry": "USA"
          }
        },
        "@type": "Event",
        "image": {
          "@type": "ImageObject",
          "url": "https://cdn.hackersandslackers.com/assets/share@2x.jpg",
          "width": "1000",
          "height": "523"
        },
        "description": "Todd and Isabel's wedding invitation."
      }`
      }
    </script>
  </Helmet>
)

export default MetaData

MetaData.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
    canonical: PropTypes.string,
    json_ltd: PropTypes.string,
  }),
}
